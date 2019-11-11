import { usersAPI } from "../api/usersApi";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "ON-INPUT-MESSAGE-CHANGE";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  newMessageBody: "",
  usersData: [],
  iFetching: true
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        body: state.newMessageBody
      };
      return {
        ...state,
        usersData: state.usersData.map(user => {
          if (user.id === action.userId && state.newMessageBody !== "") {
            return {
              ...user,
              messages: [...user.messages, newMessage]
            };
          }
          return user;
        }),
        newMessageBody: ""
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newMessageBody = action.messageBody;
      return stateCopy;
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
    default:
      return state;
  }
};

export const sendMessageAC = userId => ({ type: SEND_MESSAGE, userId });
export const updateNewMessageTextAC = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  messageBody: text
});

export const follow = userId => ({ type: FOLLOW, userId });
export const unfollow = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const toggleIsFetching = iFetching => ({
  type: TOGGLE_IS_FETCHING,
  iFetching
});

export const getUsers = profileId => {
  return dispatch => {
    usersAPI.getUsers().then(response => {
      dispatch(toggleIsFetching(false));
      let usersFilter = response.users.filter(
        user => user.id !== parseInt(profileId, 10)
      );
      dispatch(setUsers(usersFilter));
    });
  };
};
