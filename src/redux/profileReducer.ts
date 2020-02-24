const date = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const day = date.getDate();
let month = months[date.getMonth()];
if (month.length > 2) {
  month = month.slice(0, 3);
}
const year = date.getFullYear();

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_PROFILE_FETCHING = "TOGGLE_IS_PROFILE_FETCHING";

export type PostType = {
  id: number | null;
  postDescription: string | null;
  time: string | null;
  likesCount: number | null;
};

export type ProfileType = {
  id: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  status: string;
  posts: Array<PostType>;
};
export type InitialProfileStateType = {
  profile: ProfileType;
  isProfileFetching: boolean;
};

let initialState: InitialProfileStateType = {
  profile: {
    id: "",
    email: "",
    password: "",
    name: "",
    surname: "",
    status: "",
    posts: []
  },
  isProfileFetching: true
};

// type InitialStateType = typeof initialState;

export const profileReducer = (
  state = initialState,
  action: any
): InitialProfileStateType => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.profile.posts.length + 1,
        postDescription: action.newPostBody,
        time: `${day} ${month} ${year}`,
        likesCount: 0
      } as PostType;
      return {
        ...state,
        profile: {
          ...state.profile,
          posts: [newPost, ...state.profile.posts]
        }
      };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    case TOGGLE_IS_PROFILE_FETCHING: {
      return { ...state, isProfileFetching: action.isProfileFetching };
    }
    default: {
      return state;
    }
  }
};

type AddPostActionType = {
  type: typeof ADD_POST;
  newPostBody: string;
};
export const addPost = (newPostBody: string): AddPostActionType => ({
  type: ADD_POST,
  newPostBody
});

type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
export const setUserProfile = (
  profile: ProfileType
): SetUserProfileActionType => ({
  type: SET_USER_PROFILE,
  profile
});

type ToggleIsProfileFetchingActionType = {
  type: typeof TOGGLE_IS_PROFILE_FETCHING;
  isProfileFetching: boolean;
};
export const toggleIsProfileFetching = (
  isProfileFetching: boolean
): ToggleIsProfileFetchingActionType => ({
  type: TOGGLE_IS_PROFILE_FETCHING,
  isProfileFetching
});
