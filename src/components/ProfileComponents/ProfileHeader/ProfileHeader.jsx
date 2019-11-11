import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProfileHeader.module.scss";

import { PROFILE } from "../../../constants/url";
import { ProfileStatus } from "../ProfileStatus";

export const ProfileHeader = ({ name, surname, status }) => {
  return (
    <div>
      <div className={classes.profileImg}>
        <img
          src={require(`../../../static/images/${name} ${surname}.jpg`)}
          alt="profile avatar"
        />
      </div>
      <div className={classes.statusBar}>
        <div className={classes.wrapperStatus}>
          <div>
            <h3>{`${name} ${surname}`}</h3>
          </div>
          <ProfileStatus status={status} />
        </div>
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
