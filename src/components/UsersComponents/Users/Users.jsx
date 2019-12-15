import React from "react";
import { NavLink } from "react-router-dom";

import { MESSAGES, PROFILE } from "../../../constants/url";
import classes from "./Users.module.scss";
import { ProfileAvatarMini } from "../../ProfileComponents/ProfileAvatarMini";

export const Users = props => {
  return (
    <div>
      <div className={classes.usersWrapper}>
        {props.users.map(user => (
          <div key={user.id} className={classes.userWrapper}>
            <div className={classes.userAvatar}>
              <NavLink to={`${PROFILE}/${user.id}`}>
                {/* <NavLink to={`${PROFILE}`}> */}
                <div className={classes.avatarImg}>
                  <ProfileAvatarMini name={user.name} surname={user.surname} />
                </div>
              </NavLink>
            </div>
            <div className={classes.userDescription}>
              <div className={classes.userName}>
                {user.name} {user.surname}
              </div>
              <div className={classes.userTitle}>{user.title}</div>
              <div className={classes.writeMessage}>
                <NavLink
                  className={classes.dialogLink}
                  to={`${MESSAGES}/${user.id}`}
                >
                  Write message
                </NavLink>
              </div>
            </div>
            <div className={classes.userAction}>
              {user.followed ? (
                <button
                  id={classes.followedButton}
                  className={classes.button}
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Follow
                </button>
              ) : (
                <button
                  id={classes.unfollowedButton}
                  className={classes.button}
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
