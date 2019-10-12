import React from "react";

import classes from "./ProfilePage.module.scss";
import { ProfileHeaderContainer } from "../../containers/ProfileHeaderContainer";
import { PostsContainer } from "../../containers/PostsContainer";
import { ProfileBg } from "../../components/ProfileComponents/ProfileBg";

export const ProfilePage = () => {
  return (
    <div className={classes.wrapper}>
      <ProfileBg />
      <div className={classes.profileContent}>
        <ProfileHeaderContainer />
        <PostsContainer />
      </div>
    </div>
  );
};
