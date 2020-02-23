import { AppStateType } from "./reduxStore";

export const getProfileId = (state: AppStateType) => {
  return state.profileData.profile.id;
};
