import React from "react";

import classes from "./Conversations.module.scss";

export const Conversations = () => {
  return (
    <aside className={classes.conversations}>
      <ul>
        <li>Friend number 1</li>
        <li>Friend number 2</li>
        <li>Friend number 3</li>
        <li>Friend number 4</li>
        <li>Friend number 5</li>
        <li>Friend number 6</li>
      </ul>
    </aside>
  );
};
