import React from "react";
import { Link } from "react-router-dom";
import classes from "./ProfileHeader.module.scss";

import { PROFILE } from "../../../constants/url";
import { ProfileStatus } from "../ProfileStatus";
import { ProfileAvatarMini } from "../ProfileAvatarMini";

export const ProfileHeader = ({ name, surname, status }) => {
  return (
    <div>
      <div className={classes.profileImg}>
        <ProfileAvatarMini
          name={name}
          surname={surname}
          path="../../../static/images"
        />
        {/* <img
          src={require(`/${name} ${surname}.jpg`)}
          alt="profile avatar"
        /> */}
      </div>
      <div className={classes.statusBar}>
        <div className={classes.wrapperStatus}>
          <div className={classes.fullName}>
            <h3>{`${name} ${surname}`}</h3>
          </div>
          <ProfileStatus status={status} />
        </div>
      </div>
      <nav className={classes.profileNav}>
        <ul>
          <li className={classes.navLinks}>
            {/* eslint-disable-next-line */}
            <Link to={`${PROFILE}`}>General</Link>
          </li>
          <li className={classes.navLinks}>
            {/* eslint-disable-next-line */}
            <Link to={`${PROFILE}/posts`}>Posts</Link>
          </li>
          <li className={classes.navLinks}>
            {/* eslint-disable-next-line */}
            <Link to={`${PROFILE}`}>Photos</Link>
          </li>
          <li className={classes.navLinks}>
            {/* eslint-disable-next-line */}
            <Link to={`${PROFILE}`}>Videos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
