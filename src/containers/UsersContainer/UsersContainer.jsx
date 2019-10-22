import { connect } from "react-redux";

import { Users } from "../../components/UsersComponents/Users";
import { followAC, unFollowAC, setUsersAC } from "../../redux/usersReducer";

let mapStateToProps = state => {
  return {
    users: state.usersData.usersData
  };
};

let mapDispatchToProps = dispatch => {
  return {
    follow: userId => {
      dispatch(followAC(userId));
    },
    unFollow: userId => {
      dispatch(unFollowAC(userId));
    },
    setUsers: users => {
      dispatch(setUsersAC(users));
    }
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
