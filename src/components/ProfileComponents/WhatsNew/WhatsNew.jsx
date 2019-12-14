import React from "react";
import { Link } from "react-router-dom";
import { reduxForm, Field, reset } from "redux-form";

import classes from "./WhatsNew.module.scss";
import { ProfileAvatarMini } from "../ProfileAvatarMini";

import Button from "@material-ui/core/Button";

export const WhatsNew = ({ name, surname, addPost }) => {
  let addNewPost = values => {
    if (values.newPostBody) {
      addPost(values.newPostBody);
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.profileAvatar}>
        <ProfileAvatarMini name={name} surname={surname} />
      </div>
      <div className={classes.inputPost}>
        <AddPostReduxForm onSubmit={addNewPost} />
      </div>
      <div className={classes.wrapperMedia}>
        <div className={classes.media}>
          <Link to="#download-image">
            <i className="fas fa-file-image"></i>
          </Link>
        </div>
        <div className={classes.media}>
          <Link to="#download-music">
            <i className="fas fa-music"></i>
          </Link>
        </div>
        <div className={classes.media}>
          <Link to="#download-video">
            <i className="fas fa-file-video"></i>
          </Link>
        </div>
      </div>
      <div className={classes.futureFeatures}></div>
    </div>
  );
};

const AddPostForm = props => {
  return (
    <form action="" onSubmit={props.handleSubmit}>
      <Field
        name="newPostBody"
        component="textarea"
        type="text"
        placeholder="What's new?"
      />
      <div className={classes.buttonAddPost}>
        <button>Post</button>
      </div>
    </form>
  );
};

const afterSubmit = (result, dispatch) => {
  dispatch(reset("addPostForm"));
};

const AddPostReduxForm = reduxForm({
  form: "addPostForm",
  onSubmitSuccess: afterSubmit
})(AddPostForm);
