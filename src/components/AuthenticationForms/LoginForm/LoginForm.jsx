import React from "react";

import classes from "./LoginForm.module.scss";

export const LoginForm = ({
  email,
  password,
  updateLoginField,
  updatePasswordField,
  loginRequest
}) => {
  return (
    <form action="">
      <div className={classes.formInputs}>
        <input
          type="email"
          placeholder="Email..."
          value={email}
          onChange={e => {
            updateLoginField(e.target.value);
          }}
        />
      </div>
      <div className={classes.formInputs}>
        <input
          type="password"
          placeholder="Password..."
          value={password}
          onChange={e => {
            updatePasswordField(e.target.value);
          }}
        />
      </div>
      <div className={classes.rememberMe}>
        <input type="checkbox" />
        <span className={classes.rememberMeCheckMark}>remember me</span>
      </div>
      <div className={classes.buttonSignIn}>
        <button onClick={() => loginRequest(email, password)}>Sign In</button>
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
    </form>
  );
};
