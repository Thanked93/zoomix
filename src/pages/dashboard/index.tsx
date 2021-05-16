import React from "react";
import VideoContainer from "../../containers/VideoContainer";
import { useAuth } from "../../context/auth";
import { usePeerConnection } from "../../context/peerConnection";

export const Dashboard: React.FC = () => {
  const {
    remoteStream,
    localStream,
    createLocalStream,
    endStream,
    call,
    acceptCall,
  } = usePeerConnection();
  const { currentUser } = useAuth();

  return (
    <div>
      {localStream !== null && currentUser !== null && (
        <VideoContainer stream={localStream} />
      )}
      {remoteStream !== null && <VideoContainer stream={remoteStream} />}
      <button onClick={() => createLocalStream()}>Create</button>
      <button onClick={call}>Call</button>
      <button onClick={acceptCall}>Accept Call</button>

      <button onClick={() => endStream()}>end Stream</button>
    </div>
  );
};

export default Dashboard;
