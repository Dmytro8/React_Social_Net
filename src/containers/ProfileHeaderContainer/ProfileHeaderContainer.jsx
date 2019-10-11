import React from "react";
import { ProfileHeader } from "../../components/ProfileComponents/ProfileHeader";

export const ProfileHeaderContainer = ({ store }) => {
  let state = store.getState();
  let name = state.profileData[0].name;
  let surname = state.profileData[0].surname;

  return <ProfileHeader name={name} surname={surname} />;
};
