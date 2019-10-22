import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./NavLinks.module.scss";
import {
  PROFILE,
  PEOPLE,
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
          <NavLink
            className={classes.aLink}
            to={PROFILE}
            activeClassName={classes.selected}
          >
            My Profile
          </NavLink>
        </li>
        <li className={classes.navLinks}>
          {/* eslint-disable-next-line */}
          <NavLink
            className={classes.aLink}
            to={MESSAGES}
            activeClassName={classes.selected}
          >
            Messages
          </NavLink>
        </li>
        <li className={classes.navLinks}>
          {/* eslint-disable-next-line */}
          <NavLink
            className={classes.aLink}
            to={PEOPLE}
            activeClassName={classes.selected}
          >
            People
          </NavLink>
        </li>
        <li className={classes.navLinks}>
          {/* eslint-disable-next-line */}
          <NavLink
            className={classes.aLink}
            to={NEWS}
            activeClassName={classes.selected}
          >
            News
          </NavLink>
        </li>
        <li className={classes.navLinks}>
          {/* eslint-disable-next-line */}
          <NavLink
            className={classes.aLink}
            to={MUSIC}
            activeClassName={classes.selected}
          >
            Music
          </NavLink>
        </li>
        <li className={classes.navLinks}>
          {/* eslint-disable-next-line */}
          <NavLink
            className={classes.aLink}
            to={SETTINGS}
            activeClassName={classes.selected}
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
