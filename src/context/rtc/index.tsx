import React, { createContext, ReactNode, useContext, useState } from "react";
import { db } from "../../firebase";
import { useAuth } from "../auth";

interface IContext {
  pc: RTCPeerConnection;
  localStream: MediaStream | null;
  remoteStream: Array<MediaStream>;
  initLocalStream(): Promise<void>;
}
const RtcContext = createContext<IContext>({} as IContext);

export const useRtc = () => {
  return useContext(RtcContext);
};

interface Props {
  children: ReactNode;
}

const RtcProvider = ({ children }: Props) => {
  const { room } = useAuth();
  const [pc] = useState<RTCPeerConnection>(new RTCPeerConnection(servers));
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<Array<MediaStream>>([]);

  const initLocalStream = async () => {
    try {
      //setting local-stream and add tracks to the pc
      const ls = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      setLocalStream(ls);
      ls.getTracks().forEach((track) => {
        pc.addTrack(track, ls);
      });

      setRemoteStream([new MediaStream()]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RtcContext.Provider value={{ pc, localStream, initLocalStream, remoteStream }}>{children}</RtcContext.Provider>
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
