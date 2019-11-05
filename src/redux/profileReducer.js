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
const UPDATE_NEW_POST_TEXT = "ON-INPUT-POST-CHANGE";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const TOGGLE_IS_PROFILE_FETCHING = "TOGGLE_IS_PROFILE_FETCHING";

let initialState = {
  profile: {
    // name: "Margot",
    // surname: "Robbie",
    // newPostDescription: "",
    // posts: [
    //   {
    //     id: 1,
    //     postDescription:
    //       // eslint-disable-next-line no-multi-str
    //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam cumque quod debitis, \
    //         molestias nesciunt veniam qui nostrum sunt labore!",
    //     likesCount: 1923422,
    //     time: `${day} ${month} ${year}`
    //   },
    //   {
    //     id: 2,
    //     postDescription:
    //       // eslint-disable-next-line no-multi-str
    //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error beatae excepturi, \
    //         commodi minus asperiores nam delectus, ut, accusantium fugiat totam accusamus sed. \
    //         Ea id harum veniam voluptas fuga, et qui obcaecati, omnis consequatur fugiat voluptate \
    //         nam excepturi ipsum corporis quam dolore fugit laboriosam dolor ipsa rerum saepe enim? \
    //         Sed, excepturi?",
    //     likesCount: 45,
    //     time: `${day} ${month} ${year}`
    //   },
    //   {
    //     id: 3,
    //     postDescription:
    //       // eslint-disable-next-line no-multi-str
    //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error beatae excepturi, \
    //         commodi minus asperiores nam delectus, ut, accusantium fugiat totam accusamus sed. \
    //         Ea id harum veniam voluptas fuga, et qui obcaecati",
    //     likesCount: 3,
    //     time: `${day} ${month} ${year}`
    //   },
    //   {
    //     id: 4,
    //     postDescription:
    //       // eslint-disable-next-line no-multi-str
    //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error beatae excepturi, \
    //         commodi minus asperiores nam delectus, ut, accusantium fugiat totam accusamus sed. \
    //         Ea id harum veniam voluptas fuga, et qui obcaecati",
    //     likesCount: 2086,
    //     time: `${day} ${month} ${year}`
    //   },
    //   {
    //     id: 5,
    //     postDescription:
    //       // eslint-disable-next-line no-multi-str
    //       "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error beatae excepturi, \
    //         commodi minus asperiores nam delectus, ut, accusantium fugiat totam accusamus sed. \
    //         Ea id harum veniam voluptas fuga, et qui obcaecati",
    //     likesCount: 54673,
    //     time: `${day} ${month} ${year}`
    //   }
    // ]
  },
  isProfileFetching: true
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        postDescription: state.profile.newPostDescription,
        time: `${day} ${month} ${year}`,
        likesCount: 0
      };
      return {
        ...state,
        profile: {
          ...state.profile,
          posts: [newPost, ...state.profile.posts],
          newPostDescription: ""
        }
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        profile: { ...state.profile, newPostDescription: action.postMessage }
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

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = text => ({
  type: UPDATE_NEW_POST_TEXT,
  postMessage: text
});
export const setUserProfile = profile => ({
  type: SET_USER_PROFILE,
  profile
});
export const toggleIsProfileFetching = isProfileFetching => ({
  type: TOGGLE_IS_PROFILE_FETCHING,
  isProfileFetching
});
