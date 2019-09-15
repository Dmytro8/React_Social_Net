import React, { Component } from "react";

import classes from "./ProfilePage.module.scss";
import { ProfileHeader } from "../../components/ProfileComponents/ProfileHeader";
import { Posts } from "../../containers/ProfileContainers/Posts";
import { ProfileBg } from "../../components/ProfileComponents/ProfileBg";

export class ProfilePage extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <ProfileBg />
        <div className={classes.profileContent}>
          <ProfileHeader />
          <Posts />
        </div>
      </div>
    );
  }
}
