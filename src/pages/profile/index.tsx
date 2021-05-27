import React from "react";
import ProfileContainer from "../../containers/profileContainer";
import { useAuth } from "../../context/auth";

const Profile = () => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <ProfileContainer currentUser={currentUser} />;
  }
  return <div>Hello</div>;
};

export default Profile;
