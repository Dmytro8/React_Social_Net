// import React from "react";
// import { LoginForm } from "../../../components/AuthenticationForms/LoginReduxForm";
// import { connect } from "react-redux";

// import {
//   updateLoginField,
//   updatePasswordField,
//   toggleAuthorize,
//   loginRequest
// } from "../../../redux/authReducer";

// const LoginFormContainer = props => {
//   return (
//     <LoginForm
//       email={props.email}
//       password={props.password}
//       updateLoginField={props.updateLoginField}
//       updatePasswordField={props.updatePasswordField}
//       loginRequest={props.loginRequest}
//     />
//   );
// };

// let mapStateToProps = state => {
//   return {
//     email: state.authData.email,
//     password: state.authData.password
//   };
// };

// export default connect(
//   mapStateToProps,
//   {
//     updateLoginField,
//     updatePasswordField,
//     toggleAuthorize,
//     loginRequest
//   }
// )(LoginFormContainer);
