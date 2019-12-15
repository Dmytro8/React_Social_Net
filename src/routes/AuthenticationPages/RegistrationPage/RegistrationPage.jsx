import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./RegistrationPage.module.scss";
import { RegistrationReduxForm } from "../../../components/AuthenticationForms/RegistrationReduxForm";
import { LOGIN } from "../../../constants/url";

export const RegistrationPage = () => {
  const onSubmitRegistration = formData => {
    console.log(formData);
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <h1 className={classes.headerText}>Sign Up</h1>
      </div>
      <RegistrationReduxForm onSubmit={onSubmitRegistration} />
      <div className={classes.signIn}>
        <NavLink to={LOGIN}>
          <h4>Sign In</h4>
        </NavLink>
      </div>
    </div>
  );
};
