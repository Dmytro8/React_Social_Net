import React from "react";
import { connect } from "react-redux";
import axios from "axios";

import classes from "./ProfileContainer.module.scss";
import { ProfileBg } from "../../components/ProfileComponents/ProfileBg";

import {
  addPost,
  updateNewPostText,
  setUserProfile,
  toggleIsProfileFetching
} from "../../redux/profileReducer";
import { Preloader } from "../../components/Preloader";
import { ProfileHeader } from "../../components/ProfileComponents/ProfileHeader";
import { Posts } from "../../components/ProfileComponents/Posts";
import { withRouter } from "react-router";

class ProfileContainer extends React.Component {
  componentDidMount() {
    // let userId = this.props.match.params.userId;
    // if (!userId) {
    //   userId = 10;
    // }
    // axios
    //   .get(`http://127.0.0.1:5000/profile/${this.props.userId}`)
    //   .then(response => {
    //     this.props.setUserProfile(response.data);
    //     this.props.toggleIsProfileFetching(false);
    //   });
  }

  render() {
    return (
      <>
        {this.props.isProfileFetching ? (
          <div className={classes.spinner}>
            <Preloader />
          </div>
        ) : (
          <div className={classes.wrapper}>
            <ProfileBg />
            <div className={classes.profileContent}>
              {/* <ProfileHeaderContainer /> */}
              <ProfileHeader
                name={this.props.profile.name}
                surname={this.props.profile.surname}
                status={this.props.profile.status}
              />
              {/* <PostsContainer /> */}
              <Posts
                name={this.props.profile.name}
                surname={this.props.profile.surname}
                newPostDescription={this.props.profile.newPostDescription}
                posts={this.props.profile.posts}
                addPost={this.props.addPost}
                updateNewPostText={this.props.updateNewPostText}
              />
            </div>
          </div>
        )}
      </>
    );
  }
}

let mapStateToProps = state => ({
  userId: state.authData.userId,
  profile: state.profileData.profile,
  isProfileFetching: state.profileData.isProfileFetching
});

let WithUrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(
  mapStateToProps,
  {
    addPost,
    updateNewPostText,
    setUserProfile,
    toggleIsProfileFetching
  }
)(WithUrlDataProfileContainer);
