import React from "react";
import { NavLink } from "react-router-dom";

import { MESSAGES } from "../../../constants/url";

import classes from "./Users.module.scss";

export const Users = props => {
  return (
    <div>
      <div className={classes.inputSearch}>
        <input type="text" placeholder="Search" />
      </div>
      <div className={classes.usersWrapper}>
        {props.users.map(user => (
          <div key={user.id} className={classes.userWrapper}>
            <div className={classes.userAvatar}>
              <div className={classes.avatarImg}>
                <img
                  src={require(`../../../static/images/${user.name} ${user.surname}.jpg`)}
                  alt="user"
                />
              </div>
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
                    props.unFollow(user.id);
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
