import React from "react";
import { Header } from "../../components/Header";

import { connect } from "react-redux";

import { toggleAuthorize } from "../../redux/authReducer";

const HeaderContainer = props => {
  return <Header toggleAuthorize={props.toggleAuthorize} />;
};

// let mapStateToProps = state => {};

export default connect(null, { toggleAuthorize })(HeaderContainer);
