import React, { createContext, useContext, useEffect, useState } from "react";
import db from "../../firebase";
import { IPeerConnection, PeerConnectionProps } from "./interfaces";
import { servers } from "./servers";

const PeerConnectionContext = createContext<IPeerConnection>({} as IPeerConnection);

export const usePeerConnection = () => {
  return useContext(PeerConnectionContext);
};

const PeerConnection: React.FC<PeerConnectionProps> = ({ children }) => {
  const database = db.firestore();
  const [peer, setPeer] = useState<RTCPeerConnection | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>();

  const createRoom = async () => {
    setRemoteStream(new MediaStream());
    setPeer(new RTCPeerConnection(servers));
  };

  useEffect(() => {
    if (peer && remoteStream) {
      peer.addEventListener("track", (event) => {
        event.streams[0].getTracks().forEach((track) => remoteStream.addTrack(track));
      });
    }
  }, [peer, remoteStream]);

  return <PeerConnectionContext.Provider value={{}}>{children}</PeerConnectionContext.Provider>;
};

export default PeerConnection;
