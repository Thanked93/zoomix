import { ReactNode } from "react";

export interface IPeerConnection {
  pc: RTCPeerConnection | null;
  localStream: React.MutableRefObject<MediaStream | null>;
  remoteStream: React.MutableRefObject<MediaStream | null>;
  callInput: string;
  createLocalStream(): Promise<void>;
  setCallInput(str: string): any;
  endStream(): void;
  call(): Promise<void>;
  acceptCall(): Promise<void>;
}

export interface PeerConnectionProps {
  children: ReactNode;
}
