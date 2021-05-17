import React, { useState } from "react";
import VideoContainer from "../../containers/VideoContainer";
import { useAuth } from "../../context/auth";
import { usePeerConnection } from "../../context/peerConnection";

export const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();

  return <div>hello</div>;
};

export default Dashboard;
