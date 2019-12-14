import React from "react";

import classes from "./AuthenticationPage.module.scss";
import { NavLink } from "react-router-dom";
import { LOGIN, REGISTRATION } from "../../../constants/url";

export const AuthenticationPage = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.greeting}>
        <h2 className={classes.text}>Welcome to SMILE</h2>
      </div>
      <div id="signIn" className={classes.button}>
        <h4 className={classes.text}>Already have an account?</h4>
        <NavLink to={LOGIN}>
          <button>Sign In</button>
        </NavLink>
      </div>
      <div id="signUp" className={classes.button}>
        <h4 className={classes.text}>Not yet a member?</h4>
        <NavLink to={REGISTRATION}>
          <button>Sign Up</button>
        </NavLink>
      </div>
    </div>
  );
};
