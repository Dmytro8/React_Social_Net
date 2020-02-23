import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profileReducer";
import { usersReducer } from "./usersReducer";
import { authReducer } from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

export const rootReducer = combineReducers({
  profileData: profileReducer,
  usersData: usersReducer,
  authData: authReducer,
  form: formReducer
});

type RootReducerType = typeof rootReducer; // (globalstate: GLOBALSTATE) => GLOBALSTATE
export type AppStateType = ReturnType<RootReducerType>;

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// @ts-ignore
window.store = store;
