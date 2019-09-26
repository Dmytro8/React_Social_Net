import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProfileHeader.module.scss";

import { PROFILE } from "../../../constants/url";

export const ProfileHeader = ({ profileData }) => {
  let userImage = profileData.map(profile => (
    <img
      src={require(`../../../static/images/${profile.name} ${profile.surname}.jpg`)}
      alt="profile avatar"
    />
  ));
  let userName = profileData.map(profile => (
    <h2>{`${profile.name} ${profile.surname}`}</h2>
  ));

  return (
    <div>
      <div className={classes.profileImg}>{userImage}</div>
      <div className={classes.profileName}>{userName}</div>
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
