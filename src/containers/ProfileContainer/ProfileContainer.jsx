import React, { Suspense } from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";

import axios from "axios";

import classes from "./ProfileContainer.module.scss";
import { ProfileBg } from "../../components/ProfileComponents/ProfileBg";

import {
  addPost,
  setUserProfile,
  toggleIsProfileFetching
} from "../../redux/profileReducer";
import { getUsers } from "../../redux/usersReducer";

import { Preloader } from "../../components/common/Preloader";
import { ProfileHeader } from "../../components/ProfileComponents/ProfileHeader";
import { Posts } from "../../components/ProfileComponents/Posts";
import ProfileLayout from "../../layouts/ProfileLayout";
import { PROFILE } from "../../constants/url";
import { PostsContainer } from "../PostsContainer";

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
    this.props.getUsers(this.props.profileId);
  }
  render() {
    const spinnerStyle = {
      position: "fixed",
      left: "50%",
      top: "50%",
      marginLeft: "-20px",
      marginTop: "-20px"
    };
    return (
      <>
        {this.props.isProfileFetching ? (
          <div className={classes.spinner}>
            <Preloader />
          </div>
        ) : (
          <ProfileLayout>
            <Suspense
              fallback={
                <div style={spinnerStyle}>
                  <Preloader />
                </div>
              }
            >
              <Switch>
                <Route component={PostsContainer} path={`${PROFILE}/posts`} />
                <Route
                  render={() => <div>Section with new info</div>}
                  path={`${PROFILE}`}
                />
                <Route
                  render={() => <div>Section with new info</div>}
                  path={`${PROFILE}`}
                />
                <Route
                  render={() => <div>Section with new info</div>}
                  path={`${PROFILE}`}
                />
              </Switch>
            </Suspense>
          </ProfileLayout>
          // <div className={classes.wrapper}>
          //   <ProfileBg />
          //   <div className={classes.profileContent}>
          //     {/* <ProfileHeaderContainer /> */}
          //     <ProfileHeader
          //       name={this.props.profile.name}
          //       surname={this.props.profile.surname}
          //       status={this.props.profile.status}
          //     />
          //     {/* <PostsContainer /> */}
          //     <Posts
          //       name={this.props.profile.name}
          //       surname={this.props.profile.surname}
          //       posts={this.props.profile.posts}
          //       addPost={this.props.addPost}
          //     />
          //   </div>
          // </div>
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

export default connect(mapStateToProps, {
  addPost,
  setUserProfile,
  toggleIsProfileFetching,
  getUsers
})(WithUrlDataProfileContainer);
