import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProfileHeader.module.scss";

import { PROFILE } from "../../../constants/url";

export const ProfileHeader = ({ name, surname }) => {
  return (
    <div>
      <div className={classes.profileImg}>
        <img
          src={require(`../../../static/images/${name} ${surname}.jpg`)}
          alt="profile avatar"
        />
      </div>
      <div className={classes.profileName}>
        <h2>{`${name} ${surname}`}</h2>
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
