import React from "react";
// import userImg from "../../static/images/profile-img.jpg";

import classes from "./Dialog.module.scss";

export const Dialog = ({ id, name, surname }) => {
  return (
    <div className={classes.wrapper}>
      <div>
        <span className={classes.line}></span>
      </div>
      <div className={classes.wrapperGrid}>
        <div className={classes.userImg}>
          <img
            src={require(`../../static/images/${name} ${surname}.jpg`)}
            alt="user"
          />
        </div>
        <div className={classes.content}>
          <div className={classes.userName}>{`${name} ${surname}`}</div>
          <div className={classes.userMessage}>last line from conversation</div>
        </div>
        <div className={classes.timeSection}>
          <div className={classes.deleteMessage}>
            <a className={classes.deleteLink} href="#delete-message">
              <i className="fas fa-times"></i>
            </a>
          </div>
          <div className={classes.time}>11 Feb 2019</div>
        </div>
      </div>
    </div>
  );
};
