import { Posts } from "../../components/ProfileComponents/Posts/Posts";
import {
  addPostActionCreator,
  updateNewPostTestActionCreator
} from "../../redux/profileReducer";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    name: state.profileData.name,
    surname: state.profileData.surname,
    newPostDescription: state.profileData.newPostDescription,
    posts: state.profileData.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: () => {
      dispatch(addPostActionCreator());
    },
    onInputPostChange: text => {
      dispatch(updateNewPostTestActionCreator(text));
    }
  };
};

export const PostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
