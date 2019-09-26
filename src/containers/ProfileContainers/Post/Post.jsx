import React from "react";

import classes from "./Post.module.scss";
import postImage from "../../../static/images/post-img.jpg";
import { ProfileAvatarMini } from "../../../components/ProfileComponents/ProfileAvatarMini";

export const Post = ({
  name,
  surname,
  postId,
  postDescription,
  likesCount,
  time
}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.details}>
        <ProfileAvatarMini name={name} surname={surname} />
        <div className={classes.info}>
          <div>
            <span className={classes.userName}>
              {name} {surname}
            </span>
            <span className={classes.addedPost}>added new post:</span>
          </div>
          <div className={classes.createdDate}>{`${time}`}</div>
        </div>
        <div className={classes.changes}>
          <a href="#details">
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
      </div>
      <div className={classes.imageForPost}>
        <img src={postImage} alt="post" />
      </div>
      <main className={classes.main}>{postDescription}</main>
      <footer className={classes.community}>
        <div className={classes.comments}>
          <a href="#comment">
            <i className="far fa-comment-alt"></i>
          </a>
        </div>
        <div className={classes.likesShareWrapper}>
          <div className={classes.share}>
            <a href="#share">
              <i className="fas fa-share"></i>
            </a>
          </div>
          <div className={classes.likes}>
            <a href="#like">
              <i className="far fa-heart">{` ${likesCount}`}</i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
