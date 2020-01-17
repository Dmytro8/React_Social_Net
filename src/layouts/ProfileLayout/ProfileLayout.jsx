import React from "react";

import { connect } from "react-redux";

import classes from "./ProfileLayout.module.scss";
import { ProfileBg } from "../../components/ProfileComponents/ProfileBg";
import { ProfileHeader } from "../../components/ProfileComponents/ProfileHeader";

const ProfileLayout = props => {
  return (
    <div className={classes.wrapper}>
      <ProfileBg />
      <div className={classes.profileContent}>
        <ProfileHeader
          name={props.profile.name}
          surname={props.profile.surname}
          status={props.profile.status}
        />
        {/* <PostsContainer /> */}
        <main>{props.children}</main>
        {/* <Posts
          name={this.props.profile.name}
          surname={this.props.profile.surname}
          posts={this.props.profile.posts}
          addPost={this.props.addPost} */}
      </div>
    </div>
  );
};

let mapStateToProps = state => ({
  profile: state.profileData.profile
});

export default connect(mapStateToProps, null)(ProfileLayout);
