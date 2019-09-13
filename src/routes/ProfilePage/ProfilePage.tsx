import React from "react";

import "./ProfilePage.scss";

import contentImage from "../../static/images/content-image.jpg";

export const ProfilePage = () => {
  return (
    <div>
      <div>
        <img src={contentImage} alt="content" />
      </div>
      <div>ava + description</div>
      <div>
        My posts
        <div>New Posts</div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
    </div>
  );
};
