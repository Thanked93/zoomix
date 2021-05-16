import React from "react";
import VideoContainer from "../../containers/VideoContainer";
import { useAuth } from "../../context/auth";
import { usePeerConnection } from "../../context/peerConnection";

export const Dashboard: React.FC = () => {
  const { localStream, createLocalStream, endStream } = usePeerConnection();
  const { currentUser } = useAuth();

  return (
    <div>
      {localStream !== null && currentUser !== null && (
        <VideoContainer stream={localStream} />
      )}
      <button onClick={async () => await createLocalStream()}>Create</button>
      <button onClick={() => endStream()}>end Stream</button>
    </div>
  );
};

export default Dashboard;
