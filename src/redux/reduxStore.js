import { createStore, combineReducers, applyMiddleware } from "redux";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

export const reducers = combineReducers({
  profileData: profileReducer,
  usersData: usersReducer,
  authData: authReducer,
  form: formReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
