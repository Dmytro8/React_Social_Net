import React from "react";
import { AppStateType } from "../../redux/reduxStore";
import { connect } from "react-redux";

import { MessagesContainer } from "../../components/MessagesComponents/MessagesContainer/MessagesContainer";
import { UserDataType } from "../../redux/usersReducer";

type MapStatePropsType = {
  usersData: Array<UserDataType>;
};
type PropsType = MapStatePropsType;

const MessagesPage: React.FC<PropsType> = props => {
  return <MessagesContainer usersData={props.usersData} />;
};

let mapStateToProps = (state: AppStateType) => ({
  usersData: state.usersData.usersData
});

export default connect<MapStatePropsType, {}, {}, AppStateType>(
  mapStateToProps,
  {}
)(MessagesPage);
