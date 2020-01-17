import React from "react";

import "./ProfileAvatarMini.scss";

export const ProfileAvatarMini = ({ name, surname, path }) => {
  if (name === undefined && surname === undefined) {
    name = "without";
    surname = "avatar";
  }
  return (
    <img
      src={require(`../../../static/images/${name} ${surname}.jpg`)}
      // src={require(`../../../static/images/without avatar.jpg`)}
      alt="user"
    />
  );
};
