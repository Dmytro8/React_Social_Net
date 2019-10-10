import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { messagesReducer } from "./messagesReducer";

export const reducers = combineReducers({
  profileData: profileReducer,
  messagesData: messagesReducer
});

export const store = createStore(reducers);
