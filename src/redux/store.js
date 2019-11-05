import { profileReducer } from "./profileReducer";
import { messagesReducer } from "./usersReducer";

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

// usersData: [
// {
//   id: 1,
//   followed: true,
//   name: "Jeff",
//   surname: "Bezos",
//   location: {
//     country: "United States",
//     city: "Albuquerque"
//   },
//   title: "The founder of Amazon",
//   messages: [
//     {
//       body: "Hello"
//     },
//     {
//       body: "I'm Jeff Bezos"
//     },
//     {
//       body: "Hello"
//     },
//     {
//       body: "I'm Jeff Bezos"
//     },
//     {
//       body: "Hello"
//     },
//     {
//       body: "I'm Jeff Bezos"
//     },
//     {
//       body: "Hello"
//     },
//     {
//       body: "I'm Jeff Bezos"
//     },
//     {
//       body: "Hello"
//     },
//     {
//       body: "I'm Jeff Bezos"
//     },
//     {
//       body: "Hello"
//     },
//     {
//       body: "I'm Jeff Bezos"
//     }
//   ]
// },
// {
//   id: 2,
//   followed: true,
//   name: "Bill",
//   surname: "Gates",
//   location: {
//     country: "United States",
//     city: "Seattle"
//   },
//   title: "The founder of Microsoft Corporation",
//   messages: [
//     {
//       body: "Hello"
//     },
//     {
//       body: "I'm Bill Gates"
//     },
//     {
//       body: "Hello"
//     },
//     {
//       body: "I'm Bill Gates"
//     },
//     {
//       body: "Hello"
//     },
//     {
//       body: "I'm Bill Gates"
//     },
//     {
//       body: "Hello"
//     },
//     {
//       body: "I'm Bill Gates"
//     },
//     {
//       body: "Hello"
//     },
//     {
//       body: "I'm Bill Gates"
//     },
//     {
//       body: "Hello"
//     },
//     {
//       body: "I'm Bill Gates"
//     },
//     {
//       body: "Hello"
//     },
//     {
//       body: "I'm Bill Gates"
//     }
//   ]
// },
// {
//   id: 3,
//   followed: true,
//   name: "Warren",
//   surname: "Buffett",
//   location: {
//     country: "United States",
//     city: "Omaha"
//   },
//   title: "The most successful investors in the world",
//   messages: []
// },
// {
//   id: 4,
//   followed: true,
//   name: "Bernard",
//   surname: "Arnault",
//   location: {
//     country: "France",
//     city: "Paris"
//   },
//   title: "The chairman and chief executive of Louis Vuitton SE, LVMH",
//   messages: []
// },
// {
//   id: 5,
//   followed: true,
//   name: "Carlos",
//   surname: "Slim Helu",
//   location: {
//     country: "Mexico",
//     city: "Mexico City"
//   },
//   title: "Mexican business magnate, engineer, investor and philanthropist",
//   messages: []
// },
// {
//   id: 6,
//   followed: true,
//   name: "Amancio",
//   surname: "Ortega",
//   location: {
//     country: "Spain",
//     city: "Busdongo"
//   },
//   title: "The founder and former chairman of Zara",
//   messages: []
// },
// {
//   id: 7,
//   followed: true,
//   name: "Larry",
//   surname: "Ellison",
//   location: {
//     country: "United States",
//     city: "The Bronx"
//   },
//   title:
//     "The executive chairman and chief technology officer of Oracle Corporation",
//   messages: []
// },
// {
//   id: 8,
//   followed: true,
//   name: "Mark",
//   surname: "Zuckerberg",
//   location: {
//     country: "United States",
//     city: "White Plains"
//   },
//   title: "Chief Executive Officer of Facebook",
//   messages: []
// },
// {
//   id: 9,
//   followed: true,
//   name: "Elon",
//   surname: "Musk",
//   location: {
//     country: "South Africa",
//     city: "Pretoria"
//   },
//   title: "CEO, and chief engineer/designer of SpaceX",
//   messages: []
// },
// {
//   id: 10,
//   followed: true,
//   name: "Robert",
//   surname: "Downey",
//   location: {
//     country: "United States",
//     city: "Manhattan"
//   },
//   title: "IronMan",
//   messages: []
// },
// {
//   id: 11,
//   followed: true,
//   name: "Tom",
//   surname: "Holland",
//   location: {
//     country: "United Kingdom",
//     city: "Kingston upon Thames"
//   },
//   title: "Spiderman",
//   messages: []
// }
// ]
