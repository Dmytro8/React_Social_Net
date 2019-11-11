import React from "react";
import { connect } from "react-redux";

import { follow, unfollow, getUsers } from "../../redux/usersReducer";
import { Users } from "../../components/UsersComponents/Users";
import { Preloader } from "../../components/Preloader";
import { SearchPanel } from "../../components/SearchPanel";
import classes from "./UsersContainer.module.scss";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.profileId);
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
    getUsers
  }
)(UsersContainer);
