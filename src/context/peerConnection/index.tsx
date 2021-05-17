import React, { createContext, useContext, useEffect, useState } from "react";
import db from "../../firebase";
import { IPeerConnection, PeerConnectionProps } from "./interfaces";
import { servers } from "./servers";

const PeerConnectionContext = createContext<IPeerConnection>(
  {} as IPeerConnection
);

export const usePeerConnection = () => {
  return useContext(PeerConnectionContext);
};

const PeerConnection: React.FC<PeerConnectionProps> = ({ children }) => {
  const database = db.firestore();
  const [peer, setPeer] = useState(new RTCPeerConnection(servers));

  useEffect(() => {});

  return (
    <PeerConnectionContext.Provider value={{}}>
      {children}
    </PeerConnectionContext.Provider>
  );
};

export default PeerConnection;
