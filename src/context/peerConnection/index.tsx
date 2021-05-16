import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import db from "../../firebase";

interface IPeerConnection {
  pc: RTCPeerConnection | null;
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
  createLocalStream(): Promise<void>;
  endStream(): void;
  call(): Promise<void>;
  acceptCall(): Promise<void>;
}

const PeerConnectionContext = createContext<IPeerConnection>(
  {} as IPeerConnection
);

export const usePeerConnection = () => {
  return useContext(PeerConnectionContext);
};

interface PeerConnectionProps {
  children: ReactNode;
}

const servers = {
  iceServers: [
    {
      urls: ["stun:stun1.l.google.com:19302", "stun:stun2.l.google.com:19302"],
    },
  ],
  iceCandidatePoolSize: 10,
};

const PeerConnection: React.FC<PeerConnectionProps> = ({ children }) => {
  const [pc, setPc] = useState<RTCPeerConnection>(
    new RTCPeerConnection(servers)
  );
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream>(
    new MediaStream()
  );

  const [callInput, setCallInput] = useState("");

  useEffect(() => {
    pc.ontrack = (event) => {
      event.streams[0]
        .getTracks()
        .forEach((track) => remoteStream.addTrack(track));
    };
  }, [pc, remoteStream]);

  const createLocalStream = async () => {
    try {
      setLocalStream(
        await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        })
      );

      localStream?.getTracks().forEach((track) => {
        pc?.addTrack(track, localStream);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const endStream = () => {
    localStream?.getTracks().forEach((track) => track.stop());
  };

  const call = async () => {
    try {
      // firestore collections
      const callDoc = db.firestore().collection("calls").doc();
      const offers = callDoc.collection("offers");
      const answers = callDoc.collection("answers");

      setCallInput(callDoc.id);

      pc.onicecandidate = (event) => {
        event.candidate && offers.add(event.candidate.toJSON());
      };

      const offerDescription = await pc.createOffer();
      await pc.setLocalDescription(offerDescription);

      const offer = {
        sdp: offerDescription.sdp,
        type: offerDescription.type,
      };
      console.log("here");

      await callDoc.set({ offer });
      console.log("here");

      callDoc.onSnapshot((snapShot) => {
        const data = snapShot.data();
        if (!pc.currentRemoteDescription && data?.answer) {
          const answerDescription = new RTCSessionDescription(data.answer);
          pc.setRemoteDescription(answerDescription);
        }
      });
      console.log("here");

      answers.onSnapshot((snapShot) => {
        snapShot.docChanges().forEach((change) => {
          if (change.type === "added") {
            const candidate = new RTCIceCandidate(change.doc.data());
            pc.addIceCandidate(candidate);
          }
        });
      });
      console.log("here");
    } catch (error) {
      console.log(error);
    }
  };

  const acceptCall = async () => {
    try {
      const callId = callInput;
      const callDoc = db.firestore().collection("calls").doc(callId);
      const answer = callDoc.collection("answers");

      pc.onicecandidate = (event) => {
        event.candidate && answer.add(event.candidate.toJSON());
      };

      const callData = (await callDoc.get()).data();

      if (callData) {
        const offerDescription = callData.offer;
        await pc.setRemoteDescription(
          new RTCSessionDescription(offerDescription)
        );
      }

      const answerDescription = await pc.createAnswer();
      await pc.setLocalDescription(answerDescription);
      const answerData = {
        type: answerDescription.type,
        sdp: answerDescription.sdp,
      };

      await callDoc.update({ answerData });

      answer.onSnapshot((snapShot) => {
        snapShot.docChanges().forEach((change) => {
          if (change.type === "added") {
            let data = change.doc.data();
            pc.addIceCandidate(new RTCIceCandidate(data));
          }
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PeerConnectionContext.Provider
      value={{
        pc,
        localStream,
        remoteStream,
        createLocalStream,
        endStream,
        call,
        acceptCall,
      }}
    >
      {children}
    </PeerConnectionContext.Provider>
  );
};

export default PeerConnection;
