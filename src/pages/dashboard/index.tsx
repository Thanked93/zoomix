import React from "react";
import LocalStream from "../../components/localStream";
import RemoteStream from "../../components/remoteStream";

export const Dashboard: React.FC = () => {
  return (
    <>
      <LocalStream />
      <RemoteStream />
    </>
  );
};

export default Dashboard;
