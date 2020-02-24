import React, { Suspense } from "react";
import { connect } from "react-redux";

import { Route, Redirect, Switch } from "react-router-dom";

import classes from "./ProfileContainer.module.scss";

import { getUsers } from "../../redux/usersReducer";

import { Preloader } from "../../components/common/Preloader";
import ProfileLayout from "../../layouts/ProfileLayout";
import {
  PROFILE,
  PROFILE_POSTS,
  PROFILE_PHOTOS,
  PROFILE_VIDEOS
} from "../../constants/url";
import { PostsContainer } from "../PostsContainer";
import { AppStateType } from "../../redux/reduxStore";

type MapStatePropsType = {
  isProfileFetching: boolean;
};
type MapDispatchPropsType = {
  getUsers: (profileId: string) => void;
};
type OwnPropsType = {
  profileId: string;
};
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount() {
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
                //@ts-ignore
                <div style={spinnerStyle}>
                  <Preloader />
                </div>
              }
            >
              <Switch>
                <Route
                  exact
                  render={() => (
                    <div>
                      <div>Section with general information about user</div>
                      <div>The section is currently under development</div>
                    </div>
                  )}
                  path={`${PROFILE}`}
                />
                <Route
                  exact
                  component={PostsContainer}
                  path={`${PROFILE_POSTS}`}
                />
                <Route
                  exact
                  render={() => (
                    <div>
                      <div>Section with photos</div>
                      <div>The section is currently under development</div>
                    </div>
                  )}
                  path={`${PROFILE_PHOTOS}`}
                />
                <Route
                  exact
                  render={() => (
                    <div>
                      <div>Section with videos</div>
                      <div>The section is currently under development</div>
                    </div>
                  )}
                  path={`${PROFILE_VIDEOS}`}
                />
                <Redirect to={PROFILE} />
              </Switch>
            </Suspense>
          </ProfileLayout>
        )}
      </>
    );
  }
}

let mapStateToProps = (state: AppStateType) => ({
  isProfileFetching: state.profileData.isProfileFetching
});

// let WithUrlDataProfileContainer = withRouter(ProfileContainer);

export default connect<
  MapStatePropsType,
  MapDispatchPropsType,
  OwnPropsType,
  AppStateType
>(mapStateToProps, {
  getUsers
})(ProfileContainer);
