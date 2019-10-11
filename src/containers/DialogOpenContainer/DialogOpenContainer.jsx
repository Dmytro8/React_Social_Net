import React from "react";

import { DialogOpen } from "../../components/MessagesComponents/DialogOpen";

import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/messagesReducer";

export const DialogOpenContainer = ({ store, user }) => {
  let state = store.getState();
  let onSendMessageEnter = e => {
    if (e.key === "Enter") {
      store.dispatch(sendMessageActionCreator());
    }
  };

  let onInputMessageChange = e => {
    let body = e.target.value;
    store.dispatch(updateNewMessageTextActionCreator(body));
  };
  return (
    <DialogOpen
      name={user.name}
      surname={user.surname}
      messages={user.messages}
      newMessageBody={state.messagesData.newMessageBody}
      onSendMessageEnter={onSendMessageEnter}
      onInputMessageChange={onInputMessageChange}
    />
  );
};
