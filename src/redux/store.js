import { profileReducer } from "./profileReducer";
import { messagesReducer } from "./messagesReducer";

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

export const store = {
  _state: {
    profileData: [
      {
        name: "Margot",
        surname: "Robbie",
        newPostDescription: "",
        newMessageBody: "",
        posts: [
          {
            id: 1,
            postDescription:
              // eslint-disable-next-line no-multi-str
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam cumque quod debitis, \
              molestias nesciunt veniam qui nostrum sunt labore!",
            likesCount: 1923422,
            time: `${day} ${month} ${year}`
          },
          {
            id: 2,
            postDescription:
              // eslint-disable-next-line no-multi-str
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error beatae excepturi, \
              commodi minus asperiores nam delectus, ut, accusantium fugiat totam accusamus sed. \
              Ea id harum veniam voluptas fuga, et qui obcaecati, omnis consequatur fugiat voluptate \
              nam excepturi ipsum corporis quam dolore fugit laboriosam dolor ipsa rerum saepe enim? \
              Sed, excepturi?",
            likesCount: 45,
            time: `${day} ${month} ${year}`
          },
          {
            id: 3,
            postDescription:
              // eslint-disable-next-line no-multi-str
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error beatae excepturi, \
              commodi minus asperiores nam delectus, ut, accusantium fugiat totam accusamus sed. \
              Ea id harum veniam voluptas fuga, et qui obcaecati",
            likesCount: 3,
            time: `${day} ${month} ${year}`
          },
          {
            id: 4,
            postDescription:
              // eslint-disable-next-line no-multi-str
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error beatae excepturi, \
              commodi minus asperiores nam delectus, ut, accusantium fugiat totam accusamus sed. \
              Ea id harum veniam voluptas fuga, et qui obcaecati",
            likesCount: 2086,
            time: `${day} ${month} ${year}`
          },
          {
            id: 5,
            postDescription:
              // eslint-disable-next-line no-multi-str
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error beatae excepturi, \
              commodi minus asperiores nam delectus, ut, accusantium fugiat totam accusamus sed. \
              Ea id harum veniam voluptas fuga, et qui obcaecati",
            likesCount: 54673,
            time: `${day} ${month} ${year}`
          }
        ]
      }
    ],
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
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // pattern OBSERVER
  },
  _callSubscriber() {
    console.log("State changed");
  },

  dispatch(action) {
    this._state.profileData[0] = profileReducer(
      this._state.profileData[0],
      action
    );
    this._state = messagesReducer(this._state, action);

    this._callSubscriber(this._state);
  }
};

window.store = store;
