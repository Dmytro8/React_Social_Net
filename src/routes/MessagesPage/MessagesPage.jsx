import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MessagesPage.module.scss";

import { Dialog } from "../../components/MessagesComponents/Dialog/Dialog";
import { MESSAGES } from "../../constants/url";
import { SearchPanel } from "../../components/SearchPanel";

export const MessagesPage = ({ state }) => {
  let userData = state.usersData.usersData.map(user => {
    if (user.followed === true) {
      return (
        <NavLink
          key={user.id}
          className={classes.dialogLink}
          to={`${MESSAGES}/${user.id}`}
        >
          <Dialog
            key={user.id}
            id={user.id}
            name={user.name}
            surname={user.surname}
          />
        </NavLink>
      );
    }
    return null;
  });

  return (
    <div>
      <SearchPanel />
      <div className={classes.dialogsData}>{userData}</div>
    </div>
  );
};
