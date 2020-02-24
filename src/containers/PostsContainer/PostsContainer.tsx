import { Posts } from "../../components/ProfileComponents/Posts/Posts";
import { addPost, PostType } from "../../redux/profileReducer";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/reduxStore";

type MapStatePropsType = {
  name: string;
  surname: string;
  posts: Array<PostType>;
};
type MapDispatchPropsType = {
  addPost: (newPostBody: string) => void;
};

const mapStateToProps = (state: AppStateType) => {
  return {
    name: state.profileData.profile.name,
    surname: state.profileData.profile.surname,
    posts: state.profileData.profile.posts
  };
};

export const PostsContainer = connect<
  MapStatePropsType,
  MapDispatchPropsType,
  {},
  AppStateType
>(mapStateToProps, { addPost })(Posts);
