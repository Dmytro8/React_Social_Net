import React from "react";

import classes from "./DialogOpen.module.scss";
import { MESSAGES } from "../../../constants/url";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AttachFileIcon from "@material-ui/icons/AttachFile";

import { NavLink, Link } from "react-router-dom";
import { ProfileAvatarMini } from "../../ProfileComponents/ProfileAvatarMini";
import { Message } from "../Message";

export class DialogOpen extends React.Component {
  componentDidMount() {
    window.scrollTo(0, document.body.scrollHeight);
  }
  componentDidUpdate() {
    window.scrollTo(0, document.body.scrollHeight);
  }
  render() {
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
              {this.props.name} {this.props.surname}
            </div>
            <div className={classes.status}>Offline</div>
          </div>
          <div className={classes.userImage}>
            <ProfileAvatarMini
              name={this.props.name}
              surname={this.props.surname}
            />
          </div>
        </div>
        <div className={classes.messagesContent}>
          <div className={classes.message}>
            {this.props.messages.map(message => (
              <Message body={message.body} />
            ))}
          </div>
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
              value={this.props.newMessageBody}
              onChange={this.props.onInputMessageChange}
              onKeyDown={this.props.onSendMessageEnter}
            />
          </div>
          <div className="futureFeatures"></div>
        </div>
      </div>
    );
  }
}
