import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";

export const reducers = combineReducers({
  profileData: profileReducer,
  usersData: usersReducer
});

export const store = createStore(reducers);

window.store = store;
