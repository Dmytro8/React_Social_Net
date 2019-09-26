import React from "react";

import classes from "./ProfilePage.module.scss";
import { ProfileHeader } from "../../components/ProfileComponents/ProfileHeader";
import { Posts } from "../../containers/ProfileContainers/Posts";
import { ProfileBg } from "../../components/ProfileComponents/ProfileBg";

export const ProfilePage = props => {
  return (
    <div className={classes.wrapper}>
      <ProfileBg />
      <div className={classes.profileContent}>
        <ProfileHeader profileData={props.profileData} />
        <Posts profileData={props.profileData} />
      </div>
    </div>
  );
};
