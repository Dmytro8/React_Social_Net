import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MessagesPage.module.scss";

import { Dialog } from "../../components/Dialog/Dialog";
import { MESSAGES } from "../../constants/url";

export const MessagesPage = props => {
  let userData = props.userData.map(user => (
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
