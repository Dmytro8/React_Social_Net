import { usersAPI } from "../api/usersApi";

const SEND_MESSAGE = "SEND-MESSAGE";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const UPDATE_FIELD_SEARCH = "UPDATE_FIELD_SEARCH";

type UserMessagesType = {
  body: string;
};
type UserLocationType = {
  country: string;
  city: string;
};
export type UserDataType = {
  id: number;
  followed: boolean;
  name: string;
  surname: string;
  location: UserLocationType;
  title: string;
  messages: Array<UserMessagesType>;
};

type InitialUsersStateType = {
  usersData: Array<UserDataType>;
  isFetching: boolean;
  searchField: string;
};

let initialState: InitialUsersStateType = {
  usersData: [],
  isFetching: true,
  searchField: ""
};

export const usersReducer = (
  state = initialState,
  action: any
): InitialUsersStateType => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        body: action.newMessageBody
      };
      return {
        ...state,
        usersData: state.usersData.map((user: UserDataType) => {
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
        usersData: state.usersData.map((user: UserDataType) => {
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
        usersData: state.usersData.map((user: UserDataType) => {
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

type SendMessageActionType = {
  type: typeof SEND_MESSAGE;
  userId: string;
  newMessageBody: string;
};
export const sendMessage = (
  userId: string,
  newMessageBody: string
): SendMessageActionType => ({
  type: SEND_MESSAGE,
  userId,
  newMessageBody
});

type FollowActionType = {
  type: typeof FOLLOW;
  userId: string;
};
export const follow = (userId: string): FollowActionType => ({
  type: FOLLOW,
  userId
});

type UnFollowActionType = {
  type: typeof UNFOLLOW;
  userId: string;
};
export const unfollow = (userId: string): UnFollowActionType => ({
  type: UNFOLLOW,
  userId
});

type SetUsersActionType = {
  type: typeof SET_USERS;
  users: Array<UserDataType>;
};
export const setUsers = (users: Array<UserDataType>): SetUsersActionType => ({
  type: SET_USERS,
  users
});

type ToggleIsFetchingActionType = {
  type: typeof TOGGLE_IS_FETCHING;
  isFetching: boolean;
};
export const toggleIsFetching = (
  isFetching: boolean
): ToggleIsFetchingActionType => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});

type UpdateSearchFieldActionType = {
  type: typeof UPDATE_FIELD_SEARCH;
  fieldBody: string;
};
export const updateSeachField = (
  fieldBody: string
): UpdateSearchFieldActionType => ({
  type: UPDATE_FIELD_SEARCH,
  fieldBody
});

export const getUsers = (profileId: string) => async (dispatch: any) => {
  let response = await usersAPI.getUsers();
  dispatch(toggleIsFetching(false));
  let usersFilter = response.users.filter(
    (user: UserDataType) => user.id !== parseInt(profileId, 10)
  );
  dispatch(setUsers(usersFilter));
};
