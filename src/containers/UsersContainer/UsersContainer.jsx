import React from "react";
import { connect } from "react-redux";

import { follow, unfollow } from "../../redux/usersReducer";
import { Users } from "../../components/UsersComponents/Users";
import { Preloader } from "../../components/common/Preloader";
import classes from "./UsersContainer.module.scss";
import { getProfileId } from "../../redux/profileSelectors";
import { getUsersData, getIsFetching } from "../../redux/usersSelectors";
import { SearchPanelContainer } from "../SearchPanelContainer";

export const UsersContainer = props => {
  const filterUsers = () => {
    if (props.searchUser) {
      const regexLiteral = new RegExp(`^${props.searchUser}+`, "i");
      const filterUsers = props.users.filter(user => {
        return regexLiteral.test(user.name) || regexLiteral.test(user.surname);
      });
      return filterUsers;
    } else return props.users;
  };

  return (
    <>
      <SearchPanelContainer />
      {props.isFetching ? (
        <div className={classes.spinner}>
          <Preloader />
        </div>
      ) : (
        <Users
          users={filterUsers()}
          follow={props.follow}
          unfollow={props.unfollow}
        />
      )}
    </>
  );
};

let mapStateToProps = state => {
  return {
    profileId: getProfileId(state),
    users: getUsersData(state),
    isFetching: getIsFetching(state),
    searchUser: state.usersData.searchField
  };
};

export default connect(mapStateToProps, {
  follow,
  unfollow
})(UsersContainer);
