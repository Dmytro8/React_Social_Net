import React from "react";

import classes from "./SearchPanel.module.scss";

export const SearchPanel = () => {
  return (
    <div className={classes.inputSearch}>
      <div className={classes.inputWrapper}>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
};
