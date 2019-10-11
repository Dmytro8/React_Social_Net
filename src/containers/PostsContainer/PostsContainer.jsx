import React from "react";

import { Posts } from "../../components/ProfileComponents/Posts/Posts";
import {
  addPostActionCreator,
  updateNewPostTestActionCreator
} from "../../redux/profileReducer";

export const PostsContainer = ({ store }) => {
  let state = store.getState();
  let name = state.profileData[0].name;
  let surname = state.profileData[0].surname;
  let newPostDescription = state.profileData[0].newPostDescription;
  let posts = state.profileData[0].posts;
  let onAddPost = () => {
    store.dispatch(addPostActionCreator());
  };

  let onInputPostChange = e => {
    let text = e.target.value;
    store.dispatch(updateNewPostTestActionCreator(text));
  };
  return (
    <Posts
      name={name}
      surname={surname}
      newPostDescription={newPostDescription}
      posts={posts}
      addPost={onAddPost}
      updateNewPostText={onInputPostChange}
    />
  );
};
