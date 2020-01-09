import { Posts } from "../../components/ProfileComponents/Posts/Posts";
import { addPost } from "../../redux/profileReducer";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    name: state.profileData.profile.name,
    surname: state.profileData.profile.surname,
    newPostDescription: state.profileData.profile.newPostDescription,
    posts: state.profileData.profile.posts
  };
};

export const PostsContainer = connect(mapStateToProps, { addPost })(Posts);
