import { ProfileHeader } from "../../components/ProfileComponents/ProfileHeader";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    name: state.profileData.name,
    surname: state.profileData.surname
  };
};

let mapDispatchToProps = dispatch => {
  return {};
};

export const ProfileHeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileHeader);
