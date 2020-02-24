import React from "react";
import { connect } from "react-redux";
import { logoutRequest } from "../../redux/authReducer";
import { AppStateType } from "../../redux/reduxStore";

import { Header } from "../../components/Header";

type MapDispatchPropsType = {
  logoutRequest: () => void;
};

type PropsType = MapDispatchPropsType;

const HeaderContainer: React.FC<PropsType> = props => {
  return <Header logoutRequest={props.logoutRequest} />;
};

export default connect<{}, MapDispatchPropsType, {}, AppStateType>(null, {
  logoutRequest
})(HeaderContainer);
