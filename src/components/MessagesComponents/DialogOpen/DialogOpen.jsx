import React from "react";

import classes from "./DialogOpen.module.scss";
import { MESSAGES } from "../../../constants/url";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AttachFileIcon from "@material-ui/icons/AttachFile";

import { NavLink, Link } from "react-router-dom";
import { ProfileAvatarMini } from "../../ProfileComponents/ProfileAvatarMini";
import { Message } from "../Message";

export const DialogOpen = ({
  messages,
  name,
  surname,
  newMessageBody,
  onInputMessageChange,
  onSendMessageEnter
}) => {
  let messagesData = messages.map(messages => <Message body={messages.body} />);
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
            {name} {surname}
          </div>
          <div className={classes.status}>Offline</div>
        </div>
        <div className={classes.userImage}>
          <ProfileAvatarMini name={name} surname={surname} />
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
