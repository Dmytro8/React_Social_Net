import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";

export const reducers = combineReducers({
  profileData: profileReducer,
  usersData: usersReducer,
  authData: authReducer
});

export const store = createStore(reducers);

window.store = store;
