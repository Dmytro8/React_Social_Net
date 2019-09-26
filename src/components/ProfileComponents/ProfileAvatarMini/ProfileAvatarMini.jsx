import React from "react";

import "./ProfileAvatarMini.scss";

export const ProfileAvatarMini = ({ name, surname }) => {
  return (
    <div className="userImg">
      <img
        src={require(`../../../static/images/${name} ${surname}.jpg`)}
        alt="user"
      />
    </div>
  );
};
