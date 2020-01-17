import React from "react";

import classes from "./SearchPanel.module.scss";

export const SearchPanel = () => {
  return (
    <div className={classes.inputSearch}>
      <input type="text" placeholder="Search" />
    </div>
  );
};
