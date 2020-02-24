import React from "react";
import { connect } from "react-redux";

import { DialogOpen } from "../../components/MessagesComponents/DialogOpen";
import { sendMessage, UserDataType } from "../../redux/usersReducer";
import { AppStateType } from "../../redux/reduxStore";

// type MapStatePropsType = {
//   usersData: Array<UserDataType>;
// };
// type MapDispatchPropsType = {
//   sendMessage: () => void;
// };
// type PropsType = MapStatePropsType & MapDispatchPropsType;

export const DialogOpenContainerRaw = props => {
  return (
    <DialogOpen
      userId={props.user.id}
      name={props.user.name}
      surname={props.user.surname}
      messages={props.user.messages}
      sendMessage={props.sendMessage}
    />
  );
};

const mapStateToProps = state => {
  return {
    usersData: state.usersData
  };
};

export const DialogOpenContainer = connect(mapStateToProps, { sendMessage })(
  DialogOpenContainerRaw
);
