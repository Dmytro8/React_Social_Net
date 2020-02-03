import { authAPI } from "../api/authApi";
import {
  setUserProfile,
  toggleIsProfileFetching
} from "../redux/profileReducer";

const UPDATE_LOGIN_FIELD = "UPDATE_LOGIN_FIELD";
const UPDATE_PASSWORD_FIELD = "UPDATE_PASSWORD_FIELD";
const UPDATE_AUTHORIZE = "UPDATE_AUTHORIZE";
const UPDATE_AUTHORIZING = "UPDATE_AUTHORIZING";
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
    case UPDATE_AUTHORIZING: {
      return {
        ...state,
        isAuthorizing: action.isAuthorizing
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
export const toggleAuthorizing = booleanVar => ({
  type: UPDATE_AUTHORIZING,
  isAuthorizing: booleanVar
});
export const AuthorizeFailed = booleanVar => ({
  type: AUTHORIZED_FAILED,
  isAuthorizeFailed: booleanVar
});

export const loginRequest = (email, password) => async dispatch => {
  dispatch(toggleAuthorizing(true));
  let responseAuth = await authAPI.auth(email, password);
  if (responseAuth.resultCode === 0) {
    let responseLogin = await authAPI.login();

    dispatch(setUserProfile(responseLogin));
    dispatch(toggleAuthorizing(false));
    dispatch(toggleAuthorize(true));
    dispatch(AuthorizeFailed(false));
    dispatch(toggleIsProfileFetching(false));
  } else {
    dispatch(toggleAuthorize(false));
    dispatch(AuthorizeFailed(true));
    dispatch(toggleAuthorizing(false));
  }
};

export const logoutRequest = () => async dispatch => {
  let response = await authAPI.logout();
  dispatch(toggleAuthorize(false));
};
