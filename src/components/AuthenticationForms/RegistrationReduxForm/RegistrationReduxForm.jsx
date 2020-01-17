import React from "react";

import { reduxForm, Field } from "redux-form";

import classes from "../AuthenticationForm.module.scss";
import { required } from "../../../utils/validators/validators";

const RegistrationForm = props => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <div className={classes.formInputsWrapper}>
        <div className={classes.formInputs}>
          <Field
            type="text"
            placeholder="Name"
            name="name"
            component="input"
            validate={[required]}
          />
        </div>
        <div className={classes.formInputs}>
          <Field
            type="text"
            placeholder="Surname"
            name="surname"
            component="input"
            validate={[required]}
          />
        </div>
      </div>

      <div className={classes.formInputs}>
        <Field
          type="email"
          placeholder="Email"
          name="email"
          component="input"
          validate={[required]}
        />
      </div>
      <div className={classes.formInputsWrapper}>
        <div className={classes.formInputs}>
          <Field
            type="password"
            placeholder="Password"
            name="password"
            component="input"
            validate={[required]}
          />
        </div>
        <div className={classes.formInputs}>
          <Field
            type="password"
            placeholder="Confirm password"
            name="passwordConfirmed"
            component="input"
            validate={[required]}
          />
        </div>
      </div>

      <div className={classes.buttonSign}>
        {/* <button onClick={() => loginRequest(email, password)}>Sign In</button> */}
        <button>Sign Up</button>
      </div>
    </form>
  );
};

export const RegistrationReduxForm = reduxForm({ form: "registration" })(
  RegistrationForm
);
