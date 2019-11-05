import React from "react";

import classes from "./LoginForm.module.scss";

import { NavLink } from "react-router-dom";
import { REGISTRATION } from "../../../constants/url";

export const LoginForm = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h1 className={classes.headerText}>Sign In</h1>
      </div>
      <div className={classes.inputEmail}>
        <input type="email" placeholder="Email..." value="" />
      </div>
      <div className={classes.inputPassword}>
        <input type="password" placeholder="Password..." value="" />
      </div>
      <div className={classes.buttonSignIn}>
        <button>Sign In</button>
      </div>
      <div className={classes.optionsText}>
        <h4>Or login with</h4>
      </div>
      <div className={classes.options}>
        <div>
          <button className={classes.socialIcon}>
            <img
              src={require("../../../static/images/authorization/facebook.png")}
              alt="facebookIcon"
            />
          </button>
        </div>
        <div>
          <button className={classes.socialIcon}>
            <img
              src={require("../../../static/images/authorization/google.png")}
              alt="googleIcon"
            />
          </button>
        </div>
      </div>
      <div className={classes.signUp}>
        <NavLink to={REGISTRATION}>
          <h4>Sign Up</h4>
        </NavLink>
      </div>
    </div>
  );
};
