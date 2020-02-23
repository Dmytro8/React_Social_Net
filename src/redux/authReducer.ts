import { authAPI } from "../api/authApi";
import { setUserProfile, toggleIsProfileFetching } from "./profileReducer";

const UPDATE_AUTHORIZE = "UPDATE_AUTHORIZE";
const UPDATE_AUTHORIZING = "UPDATE_AUTHORIZING";
const AUTHORIZED_FAILED = "AUTHORIZED_FAILED";

type InitialAuthStateType = {
  isAuthorized: boolean;
  isAuthorizing: boolean;
  isAuthorizeFailed: boolean;
};

let initialState: InitialAuthStateType = {
  isAuthorized: false,
  isAuthorizing: false,
  isAuthorizeFailed: false
};

export const authReducer = (
  state = initialState,
  action: any
): InitialAuthStateType => {
  switch (action.type) {
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

type ToogleAuthorizeActionType = {
  type: typeof UPDATE_AUTHORIZE;
  isAuthorized: boolean;
};
export const toggleAuthorize = (
  booleanVar: boolean
): ToogleAuthorizeActionType => ({
  type: UPDATE_AUTHORIZE,
  isAuthorized: booleanVar
});

type ToogleAuthorizingActionType = {
  type: typeof UPDATE_AUTHORIZING;
  isAuthorizing: boolean;
};
export const toggleAuthorizing = (
  booleanVar: boolean
): ToogleAuthorizingActionType => ({
  type: UPDATE_AUTHORIZING,
  isAuthorizing: booleanVar
});

type AuthorizeFailedActionType = {
  type: typeof AUTHORIZED_FAILED;
  isAuthorizeFailed: boolean;
};
export const AuthorizeFailed = (
  booleanVar: boolean
): AuthorizeFailedActionType => ({
  type: AUTHORIZED_FAILED,
  isAuthorizeFailed: booleanVar
});

export const loginRequest = (email: string, password: string) => async (
  dispatch: any
) => {
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

export const logoutRequest = () => async (dispatch: any) => {
  await authAPI.logout();
  dispatch(toggleAuthorize(false));
};
