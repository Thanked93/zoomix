import React, { createContext, ReactNode, useContext, useState } from "react";
import { servers } from "./servers";
interface IContext {
  pc: RTCPeerConnection;
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
  closeMyConnection(): void;
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
  const [pc, setPc] = useState<RTCPeerConnection>(new RTCPeerConnection(servers));
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);

  const closeMyConnection = () => {
    pc.close();
    setPc(new RTCPeerConnection());
    localStream?.getTracks().forEach((track) => track.stop);
    setLocalStream(null);
    setRemoteStream(null);
  };

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

  return (
    <RtcContext.Provider value={{ pc, closeMyConnection, localStream, initLocalStream, remoteStream }}>
      {children}
    </RtcContext.Provider>
  );
};

export default RtcProvider;
