import React from "react";
import { connect } from "react-redux";

import { DialogOpen } from "../../components/MessagesComponents/DialogOpen";

import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/usersReducer";

export const DialogOpenContainerRaw = ({
  store,
  user,
  sendMessageActionCreator,
  updateNewMessageTextActionCreator
}) => {
  let onSendMessageEnter = e => {
    if (e.key === "Enter") {
      sendMessageActionCreator();
    }
  };

  let onInputMessageChange = e => {
    let body = e.target.value;
    updateNewMessageTextActionCreator(body);
  };
  return (
    <DialogOpen
      name={user.name}
      surname={user.surname}
      messages={user.messages}
      newMessageBody={store.usersData.newMessageBody}
      onSendMessageEnter={onSendMessageEnter}
      onInputMessageChange={onInputMessageChange}
    />
  );
};

const mapStateToProps = state => {
  return {
    store: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendMessageActionCreator: payload =>
      dispatch(sendMessageActionCreator(payload)),
    updateNewMessageTextActionCreator: payload =>
      dispatch(updateNewMessageTextActionCreator(payload))
  };
};

export const DialogOpenContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogOpenContainerRaw);
