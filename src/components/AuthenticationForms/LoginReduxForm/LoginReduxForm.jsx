import React from "react";
import { reduxForm, Field } from "redux-form";

import classes from "../AuthenticationForm.module.scss";
import { required } from "../../../utils/validators/validators";
import { Input } from "../../common/FormControls/FormControls";
import cx from "classnames";

const LoginForm = props => {
  // debugger;
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <Field
        type="email"
        placeholder="Email"
        name="email"
        component={Input}
        validate={[required]}
      />
      <Field
        type="password"
        placeholder="Password"
        name="password"
        component={Input}
        validate={[required]}
      />
      {/* <div className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}></div> */}
      <div
        className={
          props.isAuthorizeFailed
            ? classes.errorAuthentication
            : classes.successAuthentication
        }
      >
        <h5>Incorrect email or password</h5>
      </div>
      <div className={classes.rememberMe}>
        {/* <input type="checkbox" /> */}
        <Field component="input" type="checkbox" name="rememberMe" />
        <span className={classes.rememberMeCheckMark}>remember me</span>
      </div>
      <>
        {!props.isAuthorizing ? (
          <div className={classes.buttonSign}>
            {/* <div
        className={cx({
          [classes.buttonSign]: true,
          [classes.buttonSignInInactive]: props.isAuthorizing
        })}
      > */}
            <button>Sign In</button>
          </div>
        ) : (
          <div
            className={cx({
              [classes.buttonSign]: true,
              [classes.buttonSignInInactive]: true
            })}
          >
            <button disabled>Signing In...</button>
          </div>
        )}
      </>
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
