import React from "react";

import classes from "./Message.module.scss";

export const Message = props => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <p className={classes.text} lang="us">
          {props.body}
        </p>
      </div>
    </div>
  );
};
