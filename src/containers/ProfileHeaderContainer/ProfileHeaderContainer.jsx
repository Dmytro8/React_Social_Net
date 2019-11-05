import { ProfileHeader } from "../../components/ProfileComponents/ProfileHeader";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    name: state.profileData.profile.name,
    surname: state.profileData.profile.surname
  };
};

export const ProfileHeaderContainer = connect(mapStateToProps)(ProfileHeader);
