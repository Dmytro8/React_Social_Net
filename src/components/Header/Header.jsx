import React from "react";
import { Link } from "react-router-dom";

import logo from "../../static/images/logo.png";
// import { PROFILE } from "../../constants/url";
import classes from "./Header.module.scss";

export const Header = ({ logoutRequest }) => {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <div className={classes.wrapperLogo}>
          <Link to="/">
            {/* <NavLink to={PROFILE}> */}
            <img src={logo} alt="logo img" />
            {/* </NavLink> */}
          </Link>
        </div>
        <div className={classes.profileSection}>
          <div className={classes.logOut}>
            <button
              onClick={() => {
                logoutRequest();
              }}
            >
              Log out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
