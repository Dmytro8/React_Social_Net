import { ProfileHeader } from "../../components/ProfileComponents/ProfileHeader";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";

type MapStatePropsType = {
  name: string;
  surname: string;
};

let mapStateToProps = (state: AppStateType) => {
  return {
    name: state.profileData.profile.name,
    surname: state.profileData.profile.surname
  };
};

export const ProfileHeaderContainer = connect<
  MapStatePropsType,
  {},
  {},
  AppStateType
>(
  mapStateToProps,
  {}
)(ProfileHeader);
