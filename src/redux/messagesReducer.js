const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "ON-INPUT-MESSAGE-CHANGE";

let initialState = {
  newMessageBody: "",
  messagesData: [
    {
      id: 1,
      name: "Jeff",
      surname: "Bezos",
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
      name: "Bill",
      surname: "Gates",
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
      name: "Warren",
      surname: "Buffett",
      messages: []
    },
    {
      id: 4,
      name: "Bernard",
      surname: "Arnault",
      messages: []
    },
    {
      id: 5,
      name: "Carlos",
      surname: "Slim Helu",
      messages: []
    },
    {
      id: 6,
      name: "Amancio",
      surname: "Ortega",
      messages: []
    },
    {
      id: 7,
      name: "Larry",
      surname: "Ellison",
      messages: []
    },
    {
      id: 8,
      name: "Mark",
      surname: "Zuckerberg",
      messages: []
    },
    {
      id: 9,
      name: "Elon",
      surname: "Musk",
      messages: []
    },
    {
      id: 10,
      name: "Robert",
      surname: "Downey",
      messages: []
    },
    {
      id: 11,
      name: "Tom",
      surname: "Holland",
      messages: []
    }
  ]
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        body: state.newMessageBody
      };
      state.messagesData[0].messages.push(newMessage);
      state.newMessageBody = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageBody = action.messageBody;
      return state;
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator = text => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  messageBody: text
});
