const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "ON-INPUT-MESSAGE-CHANGE";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  newMessageBody: "",
  usersData: [
    {
      id: 1,
      followed: true,
      name: "Jeff",
      surname: "Bezos",
      location: {
        country: "United States",
        city: "Albuquerque"
      },
      title: "The founder of Amazon",
      messages: [
        {
          body: "Hello"
        },
        {
          body: "I'm Jeff Bezos"
        },
        {
          body: "Hello"
        },
        {
          body: "I'm Jeff Bezos"
        },
        {
          body: "Hello"
        },
        {
          body: "I'm Jeff Bezos"
        },
        {
          body: "Hello"
        },
        {
          body: "I'm Jeff Bezos"
        },
        {
          body: "Hello"
        },
        {
          body: "I'm Jeff Bezos"
        },
        {
          body: "Hello"
        },
        {
          body: "I'm Jeff Bezos"
        }
      ]
    },
    {
      id: 2,
      followed: true,
      name: "Bill",
      surname: "Gates",
      location: {
        country: "United States",
        city: "Seattle"
      },
      title: "The founder of Microsoft Corporation",
      messages: [
        {
          body: "Hello"
        },
        {
          body: "I'm Bill Gates"
        },
        {
          body: "Hello"
        },
        {
          body: "I'm Bill Gates"
        },
        {
          body: "Hello"
        },
        {
          body: "I'm Bill Gates"
        },
        {
          body: "Hello"
        },
        {
          body: "I'm Bill Gates"
        },
        {
          body: "Hello"
        },
        {
          body: "I'm Bill Gates"
        },
        {
          body: "Hello"
        },
        {
          body: "I'm Bill Gates"
        },
        {
          body: "Hello"
        },
        {
          body: "I'm Bill Gates"
        }
      ]
    },
    {
      id: 3,
      followed: true,
      name: "Warren",
      surname: "Buffett",
      location: {
        country: "United States",
        city: "Omaha"
      },
      title: "The most successful investors in the world",
      messages: []
    },
    {
      id: 4,
      followed: true,
      name: "Bernard",
      surname: "Arnault",
      location: {
        country: "France",
        city: "Paris"
      },
      title: "The chairman and chief executive of Louis Vuitton SE, LVMH",
      messages: []
    },
    {
      id: 5,
      followed: true,
      name: "Carlos",
      surname: "Slim Helu",
      location: {
        country: "Mexico",
        city: "Mexico City"
      },
      title: "Mexican business magnate, engineer, investor and philanthropist",
      messages: []
    },
    {
      id: 6,
      followed: true,
      name: "Amancio",
      surname: "Ortega",
      location: {
        country: "Spain",
        city: "Busdongo"
      },
      title: "The founder and former chairman of Zara",
      messages: []
    },
    {
      id: 7,
      followed: true,
      name: "Larry",
      surname: "Ellison",
      location: {
        country: "United States",
        city: "The Bronx"
      },
      title:
        "The executive chairman and chief technology officer of Oracle Corporation",
      messages: []
    },
    {
      id: 8,
      followed: true,
      name: "Mark",
      surname: "Zuckerberg",
      location: {
        country: "United States",
        city: "White Plains"
      },
      title: "Chief Executive Officer of Facebook",
      messages: []
    },
    {
      id: 9,
      followed: true,
      name: "Elon",
      surname: "Musk",
      location: {
        country: "South Africa",
        city: "Pretoria"
      },
      title: "CEO, and chief engineer/designer of SpaceX",
      messages: []
    },
    {
      id: 10,
      followed: true,
      name: "Robert",
      surname: "Downey",
      location: {
        country: "United States",
        city: "Manhattan"
      },
      title: "IronMan",
      messages: []
    },
    {
      id: 11,
      followed: true,
      name: "Tom",
      surname: "Holland",
      location: {
        country: "United Kingdom",
        city: "Kingston upon Thames"
      },
      title: "Spiderman",
      messages: []
    }
  ]
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        body: state.newMessageBody
      };
      let stateCopy = { ...state };
      stateCopy.usersData = [...state.usersData];
      stateCopy.usersData.messages = { ...state.usersData.messages };
      stateCopy.usersData[0].messages.push(newMessage);
      stateCopy.newMessageBody = "";
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newMessageBody = action.messageBody;
      return stateCopy;
    }
    case FOLLOW: {
      return {
        ...state,
        usersData: state.usersData.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        })
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        usersData: state.usersData.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        })
      };
    }
    case SET_USERS: {
      return { ...state, users: [...state.users, ...action.users] };
    }
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  messageBody: text
});

export const followAC = userId => ({ type: FOLLOW, userId });
export const unFollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });
