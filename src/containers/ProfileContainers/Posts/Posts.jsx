import React from "react";

import classes from "./Posts.module.scss";
import { Post } from "../Post/Post";
import { WhatsNew } from "../../../components/ProfileComponents/WhatsNew";

export const Posts = ({ profileData }) => {
  let postData = profileData.map(profile =>
    profile.posts.map(post => (
      <div className={classes.postWrapper}>
        <Post
          name={profile.name}
          surname={profile.surname}
          postId={post.id}
          postDescription={post.postDescription}
          likesCount={post.likesCount}
          time={post.time}
        />
      </div>
    ))
  );
  let name = profileData[0].name;
  let surname = profileData[0].surname;
  return (
    <div className={classes.wrapper}>
      <WhatsNew name={name} surname={surname} />
      <div>
        <span className={classes.separateLine}></span>
      </div>
      <div className={classes.postsWrapper}>{postData}</div>
    </div>
  );
};
