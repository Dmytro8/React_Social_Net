import React from "react";

import classes from "./SearchPanel.module.scss";

export const SearchPanel = props => {
  const updateField = e => {
    props.updateSeachField(e.target.value);
  };

  return (
    <div className={classes.inputSearch}>
      <div className={classes.inputWrapper}>
        <input
          type="text"
          placeholder="Search"
          value={props.searchField}
          onChange={updateField}
        />
      </div>
    </div>
  );
};
