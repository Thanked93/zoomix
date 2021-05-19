import React, { useState } from "react";
import VideoContainer from "../../containers/videoContainer";
import { useAuth } from "../../context/auth";

export const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();

  return <VideoContainer />;
};

export default Dashboard;
