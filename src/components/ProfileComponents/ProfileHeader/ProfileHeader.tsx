import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProfileHeader.module.scss";

import profileImg from "../../../static/images/profile-img.jpg";
import { PROFILE } from "../../../constants/url";

export const ProfileHeader = () => {
  return (
    <div>
      <div className={classes.profileImg}>
        <img src={profileImg} alt="profile avatar" />
      </div>
      <div className={classes.profileName}>
        <h2>Name Surname</h2>
      </div>
      <nav className={classes.profileNav}>
        <ul>
          <li className={classes.navLinks}>
            {/* eslint-disable-next-line */}
            <Link to={`${PROFILE}`}>NavLink-1</Link>
          </li>
          <li className={classes.navLinks}>
            {/* eslint-disable-next-line */}
            <Link to={`${PROFILE}`}>NavLink-2</Link>
          </li>
          <li className={classes.navLinks}>
            {/* eslint-disable-next-line */}
            <Link to={`${PROFILE}`}>NavLink-3</Link>
          </li>
          <li className={classes.navLinks}>
            {/* eslint-disable-next-line */}
            <Link to={`${PROFILE}`}>NavLink-4</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
