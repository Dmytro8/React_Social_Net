import React from "react";
import { LoginForm } from "../../../components/AuthenticationForms/LoginForm";
import { connect } from "react-redux";

import {
  updateLoginField,
  updatePasswordField,
  updateAuthorize
} from "../../../redux/authReducer";
import {
  setUserProfile,
  toggleIsProfileFetching
} from "../../../redux/profileReducer";

const LoginFormContainer = props => {
  return (
    <LoginForm
      email={props.email}
      password={props.password}
      updateLoginField={props.updateLoginField}
      updatePasswordField={props.updatePasswordField}
      updateAuthorize={props.updateAuthorize}
      setUserProfile={props.setUserProfile}
      toggleIsProfileFetching={props.toggleIsProfileFetching}
    />
  );
};

let mapStateToProps = state => {
  return {
    email: state.authData.email,
    password: state.authData.password
  };
};

export default connect(
  mapStateToProps,
  {
    updateLoginField,
    updatePasswordField,
    updateAuthorize,
    setUserProfile,
    toggleIsProfileFetching
  }
)(LoginFormContainer);
