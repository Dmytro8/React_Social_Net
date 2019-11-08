const UPDATE_LOGIN_FIELD = "UPDATE_LOGIN_FIELD";
const UPDATE_PASSWORD_FIELD = "UPDATE_PASSWORD_FIELD";
const UPDATE_AUTHORIZE = "UPDATE_AUTHORIZE";

let initialState = {
  userId: 99,
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
        isAuthorized: true
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
export const updateAuthorize = () => ({
  type: UPDATE_AUTHORIZE
});
