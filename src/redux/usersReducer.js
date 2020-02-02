import { usersAPI } from "../api/usersApi";

const SEND_MESSAGE = "SEND-MESSAGE";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const UPDATE_FIELD_SEARCH = "UPDATE_FIELD_SEARCH";

let initialState = {
  usersData: [],
  iFetching: true,
  searchField: ""
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        body: action.newMessageBody
      };
      return {
        ...state,
        usersData: state.usersData.map(user => {
          if (user.id === action.userId && action.newMessageBody !== "") {
            return {
              ...user,
              messages: [...user.messages, newMessage]
            };
          }
          return user;
        })
      };
    }
    case FOLLOW: {
      return {
        ...state,
        usersData: state.usersData.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        })
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        usersData: state.usersData.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        })
      };
    }
    case SET_USERS: {
      return { ...state, usersData: action.users };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case UPDATE_FIELD_SEARCH: {
      return { ...state, searchField: action.fieldBody };
    }
    default:
      return state;
  }
};

export const sendMessage = (userId, newMessageBody) => ({
  type: SEND_MESSAGE,
  userId,
  newMessageBody
});

export const follow = userId => ({ type: FOLLOW, userId });
export const unfollow = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const toggleIsFetching = iFetching => ({
  type: TOGGLE_IS_FETCHING,
  iFetching
});
export const updateSeachField = fieldBody => ({
  type: UPDATE_FIELD_SEARCH,
  fieldBody
});

export const getUsers = profileId => async dispatch => {
  let response = await usersAPI.getUsers();
  dispatch(toggleIsFetching(false));
  let usersFilter = response.users.filter(
    user => user.id !== parseInt(profileId, 10)
  );
  dispatch(setUsers(usersFilter));
};
