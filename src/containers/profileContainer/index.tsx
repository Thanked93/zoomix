import React from "react";
import firebase from "firebase";
import ProfileStats from "../../components/profileStats";
import { ChangeButton } from "../../components/profileStats/styles";

interface ProfileContainerProps {
  currentUser: firebase.User;
}

const ProfileContainer: React.FC<ProfileContainerProps> = ({ currentUser }) => {
  return (
    <ProfileStats>
      <ProfileStats.Container>
        <ProfileStats.Image />
        <ProfileStats.Element labelName='email:'>{currentUser.email}</ProfileStats.Element>
        <ProfileStats.Element labelName='username:'>
          {currentUser.displayName || currentUser.email}
        </ProfileStats.Element>
        <ProfileStats.ChangeButton>change</ProfileStats.ChangeButton>
      </ProfileStats.Container>
    </ProfileStats>
  );
};

export default ProfileContainer;
