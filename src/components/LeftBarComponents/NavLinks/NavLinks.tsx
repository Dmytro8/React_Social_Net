import React from "react";
import { Link } from "react-router-dom";

import classes from "./NavLinks.module.scss";
import {
  PROFILE,
  MESSAGES,
  NEWS,
  MUSIC,
  SETTINGS
} from "../../../constants/url";

export const NavLinks = () => {
  return (
    <nav>
      <ul>
        <li className={classes.navLinks}>
          {/* eslint-disable-next-line */}
          <Link to={PROFILE}>My Profile</Link>
        </li>
        <li className={classes.navLinks}>
          {/* eslint-disable-next-line */}
          <Link to={MESSAGES}>Messages</Link>
        </li>
        <li className={classes.navLinks}>
          {/* eslint-disable-next-line */}
          <Link to={NEWS}>News</Link>
        </li>
        <li className={classes.navLinks}>
          {/* eslint-disable-next-line */}
          <Link to={MUSIC}>Music</Link>
        </li>
        <li className={classes.navLinks}>
          {/* eslint-disable-next-line */}
          <Link to={SETTINGS}>Settings</Link>
        </li>
      </ul>
    </nav>
  );
};
