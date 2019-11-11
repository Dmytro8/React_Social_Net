import { createStore, combineReducers, applyMiddleware } from "redux";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";
import thunkMiddleware from "redux-thunk";

export const reducers = combineReducers({
  profileData: profileReducer,
  usersData: usersReducer,
  authData: authReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
