import React, { createContext, ReactNode, useContext, useState } from "react";
import { db } from "../../firebase";

interface IContext {
  pc: RTCPeerConnection;
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
  callId: string;
  initLocalStream(): Promise<void>;
  createCall(): Promise<void>;
  answerCall(id: string): Promise<void>;
}
const RtcContext = createContext<IContext>({} as IContext);

export const useRtc = () => {
  return useContext(RtcContext);
};

interface Props {
  children: ReactNode;
}

const RtcProvider = ({ children }: Props) => {
  const [pc] = useState<RTCPeerConnection>(new RTCPeerConnection(servers));
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);
  const [callId, setCallId] = useState("");

  const initLocalStream = async () => {
    try {
      //setting local-stream and add tracks to the pc
      const ls = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      setLocalStream(ls);
      ls.getTracks().forEach((track) => {
        pc.addTrack(track, ls);
      });
      setRemoteStream(new MediaStream());
    } catch (error) {
      console.log(error);
    }
  };

  const createCall = async () => {
    // reference the
    const callDoc = db.collection("calls").doc();
    const offerCandidates = callDoc.collection("offerCandidates");
    const answerCandidates = callDoc.collection("answerCandidates");

    setCallId(callDoc.id);

    // Get candidates for caller, save to db
    pc.onicecandidate = (event) => {
      event.candidate && offerCandidates.add(event.candidate.toJSON());
    };

    // Create offer
    const offerDescription = await pc.createOffer();
    await pc.setLocalDescription(offerDescription);

    const offer = {
      sdp: offerDescription.sdp,
      type: offerDescription.type,
    };

    await callDoc.set({ offer });

    // Listen for remote answer
    callDoc.onSnapshot((snapshot) => {
      const data = snapshot.data();
      if (!pc.currentRemoteDescription && data?.answer) {
        const answerDescription = new RTCSessionDescription(data.answer);
        pc.setRemoteDescription(answerDescription);
      }
    });

    // Listen for remote ICE candidates
    answerCandidates.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const candidate = new RTCIceCandidate(change.doc.data());
          pc.addIceCandidate(candidate);
        }
      });
    });
  };

  const answerCall = async (id: string) => {
    const callDoc = db.collection("calls").doc(id);
    const offerCandidates = callDoc.collection("offerCandidates");
    const answerCandidates = callDoc.collection("answerCandidates");

    pc.onicecandidate = (event) => {
      event.candidate && answerCandidates.add(event.candidate.toJSON());
    };

    // Fetch data, then set the offer & answer

    const callData = (await callDoc.get()).data();

    const offerDescription = callData!.offer;
    await pc.setRemoteDescription(new RTCSessionDescription(offerDescription));

    const answerDescription = await pc.createAnswer();
    await pc.setLocalDescription(answerDescription);

    const answer = {
      type: answerDescription.type,
      sdp: answerDescription.sdp,
    };

    await callDoc.update({ answer });

    // Listen to offer candidates

    offerCandidates.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        console.log(change);
        if (change.type === "added") {
          let data = change.doc.data();
          pc.addIceCandidate(new RTCIceCandidate(data));
        }
      });
    });
  };

  return (
    <RtcContext.Provider value={{ pc, localStream, initLocalStream, remoteStream, callId, createCall, answerCall }}>
      {children}
    </RtcContext.Provider>
  );
};

export default RtcProvider;

const servers = {
  iceServers: [
    {
      urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
    },
  ],
  iceCandidatePoolSize: 10,
};
