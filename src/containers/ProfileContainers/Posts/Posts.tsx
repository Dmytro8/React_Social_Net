import React from "react";

import classes from "./Posts.module.scss";
import { Post } from "../../../components/ProfileComponents/Post/Post";

export const Posts = () => {
  return (
    <div>
      My posts
      <div>New Posts</div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};
