import React from "react";
import { Header } from "../../components/Header";

import { connect } from "react-redux";

import { logoutRequest } from "../../redux/authReducer";

const HeaderContainer = props => {
  return <Header logoutRequest={props.logoutRequest} />;
};

// let mapStateToProps = state => {};

export default connect(null, { logoutRequest })(HeaderContainer);
