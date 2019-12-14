import React from "react";
import { reduxForm, Field } from "redux-form";

import classes from "./LoginReduxForm.module.scss";

const LoginForm = props => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div className={classes.formInputs}>
        <Field
          type="email"
          placeholder="Email..."
          name="email"
          component="input"
        />
      </div>
      <div className={classes.formInputs}>
        <Field
          type="password"
          placeholder="Password..."
          name="password"
          component="input"
        />
      </div>
      <div className={classes.rememberMe}>
        {/* <input type="checkbox" /> */}
        <Field component="input" type="checkbox" name="rememberMe" />
        <span className={classes.rememberMeCheckMark}>remember me</span>
      </div>
      <div className={classes.buttonSignIn}>
        {/* <button onClick={() => loginRequest(email, password)}>Sign In</button> */}
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
    </form>
  );
};

export const LoginReduxForm = reduxForm({
  form: "login"
})(LoginForm);
