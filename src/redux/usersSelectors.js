import { createSelector } from "reselect";

const getUsersDataSelector = state => {
  return state.usersData.usersData;
};
export const getIsFetching = state => {
  return state.usersData.isFetching;
};

export const getUsersData = createSelector(getUsersDataSelector, users => {
  return users.filter(u => true);
});
