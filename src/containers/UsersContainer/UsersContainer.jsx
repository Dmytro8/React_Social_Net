import React from "react";
import { connect } from "react-redux";

import {
  follow,
  unfollow,
  setUsers,
  toggleIsFetching
} from "../../redux/usersReducer";
import { Users } from "../../components/UsersComponents/Users";
import { Preloader } from "../../components/Preloader";
import { SearchPanel } from "../../components/SearchPanel";
import classes from "./UsersContainer.module.scss";
import { usersAPI } from "../../api/usersApi";

class UsersContainer extends React.Component {
  componentDidMount() {
    usersAPI.getUsers().then(response => {
      this.props.toggleIsFetching(false);

      let usersFilter = response.users.filter(
        user => user.id !== parseInt(this.props.profileId, 10)
      );
      debugger;
      this.props.setUsers(usersFilter);
    });
  }
  render() {
    return (
      <>
        <SearchPanel />
        {this.props.isFetching ? (
          <div className={classes.spinner}>
            <Preloader />
          </div>
        ) : (
          <Users
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
          />
        )}
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    profileId: state.profileData.profile.id,
    users: state.usersData.usersData,
    isFetching: state.usersData.isFetching
  };
};

// let mapDispatchToProps = dispatch => {
//   return {
//     follow: userId => {
//       dispatch(followAC(userId));
//     },
//     unfollow: userId => {
//       dispatch(unFollowAC(userId));
//     },
//     setUsers: users => {
//       dispatch(setUsersAC(users));
//     },
//     toggleIsFetching: isFetching => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     }
//   };
// };

export default connect(
  mapStateToProps,
  {
    follow,
    unfollow,
    setUsers,
    toggleIsFetching
  }
)(UsersContainer);
