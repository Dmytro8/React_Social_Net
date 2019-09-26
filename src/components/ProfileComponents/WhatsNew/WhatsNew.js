import React from "react";
import { Link } from "react-router-dom";
import classes from "./WhatsNew.module.scss";
import { ProfileAvatarMini } from "../ProfileAvatarMini";

import Button from "@material-ui/core/Button";

export const WhatsNew = ({ name, surname }) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    alert(newPostElement.current.value);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.profileAvatar}>
        <ProfileAvatarMini name={name} surname={surname} />
      </div>
      <div className={classes.inputPost}>
        <textarea type="text" placeholder="What's new?" ref={newPostElement} />
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
