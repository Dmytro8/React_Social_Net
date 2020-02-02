import { authAPI } from "../api/authApi";
import {
  setUserProfile,
  toggleIsProfileFetching
} from "../redux/profileReducer";

const UPDATE_LOGIN_FIELD = "UPDATE_LOGIN_FIELD";
const UPDATE_PASSWORD_FIELD = "UPDATE_PASSWORD_FIELD";
const UPDATE_AUTHORIZE = "UPDATE_AUTHORIZE";
const AUTHORIZED_FAILED = "AUTHORIZED_FAILED";

let initialState = {
  // userId: ,
  // email: "",
  // password: "",
  isAuthorized: false,
  isAuthorizing: false,
  isAuthorizeFailed: false
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
    case AUTHORIZED_FAILED: {
      return {
        ...state,
        isAuthorizeFailed: action.isAuthorizeFailed
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
export const AuthorizedFailed = booleanVar => ({
  type: AUTHORIZED_FAILED,
  isAuthorizeFailed: true
});

export const loginRequest = (email, password) => async dispatch => {
  let response = await authAPI.login(email, password);
  debugger;
  if (!response.message) {
    dispatch(setUserProfile(response));
    dispatch(toggleAuthorize(true));
    dispatch(toggleIsProfileFetching(false));
  } else {
    // console.log("authorize failed");
    dispatch(toggleAuthorize(false));
    dispatch(AuthorizedFailed(false));
  }
};

export const logoutRequest = () => async dispatch => {
  let response = await authAPI.logout();
  debugger;
  dispatch(toggleAuthorize(false));
};
