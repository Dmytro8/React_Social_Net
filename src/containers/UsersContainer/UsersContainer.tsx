import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";
import { follow, unfollow, UserDataType } from "../../redux/usersReducer";
import { Users } from "../../components/UsersComponents/Users";
import { Preloader } from "../../components/common/Preloader";
import classes from "./UsersContainer.module.scss";
import { getUsersData, getIsFetching } from "../../redux/usersSelectors";
import { SearchPanelContainer } from "../SearchPanelContainer";

type MapStatePropsType = {
  searchUser: string;
  users: Array<UserDataType>;
  isFetching: boolean;
};
type MapDispatchPropsType = {
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
};
type PropsType = MapStatePropsType & MapDispatchPropsType;

const UsersContainer: React.FC<PropsType> = props => {
  debugger;
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

let mapStateToProps = (state: AppStateType) => {
  return {
    users: getUsersData(state),
    isFetching: getIsFetching(state),
    searchUser: state.usersData.searchField
  };
};

export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  {},
  AppStateType
>(mapStateToProps, {
  follow,
  unfollow
})(UsersContainer);
