// import { PROFILE_DATA } from "../data/ProfileData";
// import { USER_DATA } from "../data/UserData";

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

export const state = {
  profileData: [
    {
      name: "Margot",
      surname: "Robbie",
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
      surname: "Bezos"
    },
    {
      id: 2,
      name: "Bill",
      surname: "Gates"
    },
    {
      id: 3,
      name: "Warren",
      surname: "Buffett"
    },
    {
      id: 4,
      name: "Bernard",
      surname: "Arnault"
    },
    {
      id: 5,
      name: "Carlos",
      surname: "Slim Helu"
    },
    {
      id: 6,
      name: "Amancio",
      surname: "Ortega"
    },
    {
      id: 7,
      name: "Larry",
      surname: "Ellison"
    },
    {
      id: 8,
      name: "Mark",
      surname: "Zuckerberg"
    },
    {
      id: 9,
      name: "Elon",
      surname: "Musk"
    },
    {
      id: 10,
      name: "Robert",
      surname: "Downey"
    },
    {
      id: 11,
      name: "Tom",
      surname: "Holland"
    }
  ]
};
