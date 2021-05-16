import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface IPeerConnection {
  pc: RTCPeerConnection | null;
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
  createLocalStream(): Promise<void>;
  endStream(): void;
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
  const [pc, setPc] = useState<RTCPeerConnection | null>(null);
  const [localStream, setLocalStream] = useState<MediaStream | null>(null);
  const [remoteStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    setPc(new RTCPeerConnection(servers));
  }, []);

  const createLocalStream = async () => {
    try {
      const local = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      setLocalStream(local);
      localStream?.getTracks().forEach((track) => {
        pc?.addTrack(track, localStream);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const endStream = () => {
    setPc(null);
    setLocalStream(null);
  };

  return (
    <PeerConnectionContext.Provider
      value={{ pc, localStream, remoteStream, createLocalStream, endStream }}
    >
      {children}
    </PeerConnectionContext.Provider>
  );
};

export default PeerConnection;
