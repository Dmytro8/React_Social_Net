import React from "react";

import classes from "./DialogOpen.module.scss";
import { MESSAGES } from "../../constants/url";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AttachFileIcon from "@material-ui/icons/AttachFile";

import { NavLink, Link } from "react-router-dom";
import { ProfileAvatarMini } from "../ProfileComponents/ProfileAvatarMini";
import { Message } from "../Message";

import {
  sendMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/messagesReducer";

export const DialogOpen = ({ user, dispatch, newMessageBody }) => {
  let messagesData = user.messages.map(messages => (
    <Message body={messages.body} />
  ));

  let onSendMessageEnter = e => {
    if (e.key === "Enter") {
      dispatch(sendMessageActionCreator());
    }
  };

  let onInputMessageChange = e => {
    let body = e.target.value;
    dispatch(updateNewMessageTextActionCreator(body));
  };
  return (
    <div className={classes.contentWrapper}>
      <div className={classes.topPanel}>
        <div className={classes.wrapperBackArrow}>
          <NavLink to={MESSAGES} className={classes.link}>
            <ArrowBackIosIcon className={classes.backArrow} />
          </NavLink>
        </div>
        <div className={classes.userDetails}>
          <div>
            {user.name} {user.surname}
          </div>
          <div className={classes.status}>Offline</div>
        </div>
        <div className={classes.userImage}>
          <ProfileAvatarMini name={user.name} surname={user.surname} />
        </div>
      </div>
      <div className={classes.messagesContent}>
        <div className={classes.message}>{messagesData}</div>
      </div>
      <div className={classes.bottomPanel}>
        <div className={classes.attach}>
          <Link to={"#attacheFile"}>
            <AttachFileIcon
              className={classes.attachIcon}
              style={{ fontSize: 30 }}
            />
          </Link>
        </div>
        <div className={classes.inputWrapper}>
          <input
            type="text"
            value={newMessageBody}
            onChange={onInputMessageChange}
            onKeyDown={onSendMessageEnter}
          />
        </div>
        <div className="futureFeatures"></div>
      </div>
    </div>
  );
};
