import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MessagesPage.module.scss";

import { Dialog } from "../../components/MessagesComponents/Dialog/Dialog";
import { MESSAGES } from "../../constants/url";
import { SearchPanel } from "../../components/SearchPanel";
import { SearchPanelContainer } from "../../containers/SearchPanelContainer";

export const MessagesPage = ({ state }) => {
  // const regexLiteral = `/^El+/i`;
  const searchUser = state.usersData.searchField;

  const filterUsers = () => {
    if (searchUser) {
      const regexLiteral = new RegExp(`^${searchUser}+`, "i");
      const filterUsers = state.usersData.usersData.filter(user => {
        return (
          user.followed &&
          (regexLiteral.test(user.name) || regexLiteral.test(user.surname))
        );
      });
      return filterUsers;
    } else {
      const filterUsers = state.usersData.usersData.filter(user => {
        return user.followed;
      });
      return filterUsers;
    }
  };

  let userData = filterUsers().map(user => {
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
  });

  return (
    <div>
      <SearchPanelContainer />
      <div className={classes.dialogsData}>{userData}</div>
    </div>
  );
};
