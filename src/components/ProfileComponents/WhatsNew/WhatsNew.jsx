import React from "react";
import { Link } from "react-router-dom";
import classes from "./WhatsNew.module.scss";
import { ProfileAvatarMini } from "../ProfileAvatarMini";
import {
  addPostActionCreator,
  updateNewPostTestActionCreator
} from "../../../redux/profileReducer";

import Button from "@material-ui/core/Button";

export const WhatsNew = props => {
  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onInputPostChange = e => {
    let text = e.target.value;
    props.dispatch(updateNewPostTestActionCreator(text));
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.profileAvatar}>
        <ProfileAvatarMini name={props.name} surname={props.surname} />
      </div>
      <div className={classes.inputPost}>
        <textarea
          type="text"
          placeholder="What's new?"
          value={props.newPostDescription}
          onChange={onInputPostChange}
        />
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
      <div className={classes.buttonAddPost}>
        <Link to="#add-post">
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={addPost}
          >
            Post
          </Button>
        </Link>
      </div>
    </div>
  );
};
