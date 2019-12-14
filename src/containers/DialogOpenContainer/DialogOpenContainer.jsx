import React from "react";
import { connect } from "react-redux";

import { DialogOpen } from "../../components/MessagesComponents/DialogOpen";

import { sendMessage } from "../../redux/usersReducer";

export const DialogOpenContainerRaw = props => {
  // let usersData = props.usersData.usersData.map(user => (
  //   <DialogOpen
  //     userId={user.id}
  //     name={user.name}
  //     surname={user.surname}
  //     messages={user.messages}
  //     sendMessage={props.sendMessage}
  //   />
  // ));
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

export const DialogOpenContainer = connect(
  mapStateToProps,
  { sendMessage }
)(DialogOpenContainerRaw);
