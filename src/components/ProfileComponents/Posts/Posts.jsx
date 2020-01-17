import React from "react";

import classes from "./Posts.module.scss";
import { Post } from "../Post/Post";
import { WhatsNew } from "../WhatsNew";

export const Posts = ({ name, surname, posts, addPost }) => {
  // debugger;
  let postData = posts.map(post => (
    <div className={classes.postWrapper} key={post.id}>
      <Post
        name={name}
        surname={surname}
        postId={post.id}
        postDescription={post.postDescription}
        likesCount={post.likesCount}
        time={post.time}
      />
    </div>
  ));
  return (
    <div className={classes.wrapper}>
      <WhatsNew name={name} surname={surname} addPost={addPost} />
      <div>
        <span className={classes.separateLine}></span>
      </div>
      <div className={classes.postsWrapper}>{postData}</div>
    </div>
  );
};
