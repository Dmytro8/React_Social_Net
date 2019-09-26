import React from "react";

import profileBackground from "../../../static/images/profile-bg.jpg";
import classes from "./ProfileBg.module.scss";

export const ProfileBg = () => {
  return (
    <div className={classes.profileBg}>
      <img src={profileBackground} alt="content" />
    </div>
  );
};
