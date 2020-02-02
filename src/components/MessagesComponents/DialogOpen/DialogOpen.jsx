import React, { useEffect } from "react";
import { reduxForm, Field, reset } from "redux-form";
import { Link, useHistory } from "react-router-dom";

import classes from "./DialogOpen.module.scss";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AttachFileIcon from "@material-ui/icons/AttachFile";

import { ProfileAvatarMini } from "../../ProfileComponents/ProfileAvatarMini";
import { Message } from "../Message";

export const DialogOpen = props => {
  useEffect(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });

  const history = useHistory();

  const addNewMessage = values => {
    console.log(values.newMessageBody);
    if (values.newMessageBody !== undefined) {
      props.sendMessage(props.userId, values.newMessageBody);
    }
  };
  return (
    <div className={classes.contentWrapper}>
      <div className={classes.topPanel}>
        <div className={classes.wrapperBackArrow}>
          <div className={classes.link}>
            <ArrowBackIosIcon
              onClick={() => {
                history.goBack();
              }}
              className={classes.backArrow}
            />
          </div>
        </div>
        <div className={classes.userDetails}>
          <div>
            {props.name} {props.surname}
          </div>
          <div className={classes.status}>Offline</div>
        </div>
        <div className={classes.userImage}>
          <div className={classes.userImg}>
            <ProfileAvatarMini name={props.name} surname={props.surname} />
          </div>
        </div>
      </div>
      <div className={classes.messagesContent}>
        <div className={classes.message}>
          {props.messages.map((message, index) => (
            <Message key={index} body={message.body} />
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
          <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>
        <div className="futureFeatures"></div>
      </div>
    </div>
  );
};

const AddMessageForm = props => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <Field
        type="text"
        component="input"
        name="newMessageBody"
        placeholder="Enter a message..."
        autoComplete="off"
      />
    </form>
  );
};

const afterSubmit = (result, dispatch) => {
  dispatch(reset("addMessageForm"));
};

const AddMessageReduxForm = reduxForm({
  form: "addMessageForm",
  onSubmitSuccess: afterSubmit
})(AddMessageForm);
