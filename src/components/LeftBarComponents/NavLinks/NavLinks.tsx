import React from "react";
import { Link } from "react-router-dom";

import classes from "./NavLinks.module.scss";

export const NavLinks = () => {
  return (
    <nav>
      <ul>
        <li className={classes.navLinks}>
          {/* eslint-disable-next-line */}
          <Link to="/">My Profile</Link>
        </li>
        <li className={classes.navLinks}>
          {/* eslint-disable-next-line */}
          <Link to="/messages">Messages</Link>
        </li>
        <li className={classes.navLinks}>
          {/* eslint-disable-next-line */}
          <Link to="/news">News</Link>
        </li>
        <li className={classes.navLinks}>
          {/* eslint-disable-next-line */}
          <Link to="/music">Music</Link>
        </li>
        <li className={classes.navLinks}>
          {/* eslint-disable-next-line */}
          <Link to="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
};
