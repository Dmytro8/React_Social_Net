import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import classes from "./LoginPage.module.scss";

import { REGISTRATION } from "../../../constants/url";
// import { LoginFormContainer } from "../../../containers/AuthenticationContainers/LoginFormContainer";
import { LoginReduxForm } from "../../../components/AuthenticationForms/LoginReduxForm";
import { loginRequest } from "../../../redux/authReducer";

const LoginPage = ({ loginRequest }) => {
  const onSubmitLogin = formData => {
    // console.log(formData);
    loginRequest(formData.email, formData.password);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h1 className={classes.headerText}>Sign In</h1>
      </div>
      {/* <LoginFormContainer /> */}
      <LoginReduxForm onSubmit={onSubmitLogin} />
      <div className={classes.signUp}>
        <NavLink to={REGISTRATION}>
          <h4>Sign Up</h4>
        </NavLink>
      </div>
    </div>
  );
};

export default connect(null, { loginRequest })(LoginPage);
