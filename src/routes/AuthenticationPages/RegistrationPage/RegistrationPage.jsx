import React from "react";

import classes from "./RegistrationPage.module.scss";
import { RegistrationForm } from "../../../components/AuthenticationForms/RegistrationForm";

export const RegistrationPage = () => {
  return (
    <div className={classes.wrapper}>
      <RegistrationForm />
    </div>
  );
};
