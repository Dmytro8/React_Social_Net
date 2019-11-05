import React from "react";
import { connect } from "react-redux";

import { DialogOpen } from "../../components/MessagesComponents/DialogOpen";

import {
  sendMessageAC,
  updateNewMessageTextAC
} from "../../redux/usersReducer";

export const DialogOpenContainerRaw = ({
  user,
  usersData,
  sendMessageAC,
  updateNewMessageTextAC
}) => {
  let onSendMessageEnter = e => {
    if (e.key === "Enter") {
      sendMessageAC(user.id);
    }
  };

  let onInputMessageChange = e => {
    let body = e.target.value;
    updateNewMessageTextAC(body);
  };
  return (
    <DialogOpen
      name={user.name}
      surname={user.surname}
      messages={user.messages}
      newMessageBody={usersData.newMessageBody}
      onSendMessageEnter={onSendMessageEnter}
      onInputMessageChange={onInputMessageChange}
    />
  );
};

const mapStateToProps = state => {
  return {
    usersData: state.usersData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessageAC: userId => {
      dispatch(sendMessageAC(userId));
    },
    updateNewMessageTextAC: text => {
      dispatch(updateNewMessageTextAC(text));
    }
  };
};

export const DialogOpenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogOpenContainerRaw);
