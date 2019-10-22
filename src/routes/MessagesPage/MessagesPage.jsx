import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MessagesPage.module.scss";

import { Dialog } from "../../components/MessagesComponents/Dialog/Dialog";
import { MESSAGES } from "../../constants/url";

export const MessagesPage = ({ state }) => {
  let userData = state.usersData.usersData.map(user => {
    if (user.followed === true) {
      return (
        <NavLink className={classes.dialogLink} to={`${MESSAGES}/${user.id}`}>
          <Dialog id={user.id} name={user.name} surname={user.surname} />
        </NavLink>
      );
    }
    return null;
  });

  return (
    <div>
      <div className={classes.inputSearch}>
        <input type="text" placeholder="Search" />
      </div>
      <div className={classes.dialogsData}>{userData}</div>
    </div>
  );
};
