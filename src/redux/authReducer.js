import { authAPI } from "../api/authApi";
import {
  setUserProfile,
  toggleIsProfileFetching
} from "../redux/profileReducer";

const UPDATE_LOGIN_FIELD = "UPDATE_LOGIN_FIELD";
const UPDATE_PASSWORD_FIELD = "UPDATE_PASSWORD_FIELD";
const UPDATE_AUTHORIZE = "UPDATE_AUTHORIZE";

let initialState = {
  userId: 10,
  email: "robert.downey@gmail.com",
  password: "robertDowney",
  isAuthorized: false,
  isAuthorizing: false
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN_FIELD: {
      return {
        ...state,
        email: action.email
      };
    }
    case UPDATE_PASSWORD_FIELD: {
      return {
        ...state,
        password: action.password
      };
    }
    case UPDATE_AUTHORIZE: {
      return {
        ...state,
        isAuthorized: action.isAuthorized
      };
    }
    default: {
      return state;
    }
  }
};

export const updateLoginField = emailBody => ({
  type: UPDATE_LOGIN_FIELD,
  email: emailBody
});
export const updatePasswordField = passwordBody => ({
  type: UPDATE_PASSWORD_FIELD,
  password: passwordBody
});
export const toggleAuthorize = booleanVar => ({
  type: UPDATE_AUTHORIZE,
  isAuthorized: booleanVar
});

export const loginRequest = (email, password) => {
  return dispatch => {
    authAPI.login(email, password).then(response => {
      dispatch(setUserProfile(response));
      dispatch(toggleAuthorize(true));
      dispatch(toggleIsProfileFetching(false));
    });
  };
};
