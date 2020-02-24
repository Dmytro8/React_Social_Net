import React from "react";
import { NavLink } from "react-router-dom";
import { Dialog } from "../Dialog";
import { MESSAGES } from "../../../constants/url";
import { SearchPanelContainer } from "../../../containers/SearchPanelContainer";
import classes from "./MessagesContainer.module.scss";

export const MessagesContainer = ({ usersData }) => {
  // const regexLiteral = `/^El+/i`;
  const searchUser = usersData.searchField;

  const filterUsers = () => {
    if (searchUser) {
      const regexLiteral = new RegExp(`^${searchUser}+`, "i");
      const filterUsers = usersData.filter(user => {
        return (
          user.followed &&
          (regexLiteral.test(user.name) || regexLiteral.test(user.surname))
        );
      });
      return filterUsers;
    } else {
      const filterUsers = usersData.filter(user => {
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
