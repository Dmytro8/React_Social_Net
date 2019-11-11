import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./LoginPage.module.scss";

import { REGISTRATION } from "../../../constants/url";
import { LoginFormContainer } from "../../../containers/AuthenticationContainers/LoginFormContainer";

export const LoginPage = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h1 className={classes.headerText}>Sign In</h1>
      </div>
      <LoginFormContainer />
      <div className={classes.signUp}>
        <NavLink to={REGISTRATION}>
          <h4>Sign Up</h4>
        </NavLink>
      </div>
    </div>
  );
};
