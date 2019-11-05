import React from "react";
import { connect } from "react-redux";
import axios from "axios";

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

class UsersContainer extends React.Component {
  componentDidMount() {
    axios.get("http://127.0.0.1:5000/users").then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.users);
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
        ) : null}
        <Users
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
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
