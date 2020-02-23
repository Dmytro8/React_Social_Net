import { createSelector } from "reselect";
import { AppStateType } from "./reduxStore";
import { UserDataType } from "./usersReducer";

const getUsersDataSelector = (state: AppStateType) => {
  return state.usersData.usersData;
};
export const getIsFetching = (state: AppStateType) => {
  return state.usersData.isFetching;
};

export const getUsersData = createSelector(
  getUsersDataSelector,
  (users: Array<UserDataType>) => {
    return users.filter((u: UserDataType) => true);
  }
);
