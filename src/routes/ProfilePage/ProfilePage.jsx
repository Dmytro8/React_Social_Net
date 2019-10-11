import React from "react";

import classes from "./ProfilePage.module.scss";
import { ProfileHeaderContainer } from "../../containers/ProfileHeaderContainer";
import { PostsContainer } from "../../containers/PostsContainer";
import { ProfileBg } from "../../components/ProfileComponents/ProfileBg";

export const ProfilePage = ({ store }) => {
  return (
    <div className={classes.wrapper}>
      <ProfileBg />
      <div className={classes.profileContent}>
        <ProfileHeaderContainer store={store} />
        <PostsContainer store={store} />
      </div>
    </div>
  );
};
