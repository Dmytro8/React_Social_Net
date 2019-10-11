import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MessagesPage.module.scss";

import { Dialog } from "../../components/MessagesComponents/Dialog/Dialog";
import { MESSAGES } from "../../constants/url";

export const MessagesPage = ({ store }) => {
  let state = store.getState();
  let userData = state.messagesData.messagesData.map(user => (
    <NavLink
      className={classes.dialogLink}
      to={`${MESSAGES}/${user.name}-${user.surname}`}
    >
      <Dialog id={user.id} name={user.name} surname={user.surname} />
    </NavLink>
  ));

  return (
    <div>
      <div className={classes.inputSearch}>
        <input type="text" placeholder="Search" />
      </div>
      <div className={classes.dialogsData}>{userData}</div>
    </div>
  );
};
