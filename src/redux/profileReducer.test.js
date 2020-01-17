import { addPost, profileReducer } from "./profileReducer";

let state = {
  profile: {
    id: "99",
    email: "margot.robbie@gmail.com",
    password: "margotRobbie",
    name: "Margot",
    surname: "Robbie",
    status: "Status written by Margot Robbie",
    posts: [
      {
        id: 1,
        postDescription:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nam cumque quod debitis, \
            molestias nesciunt veniam qui nostrum sunt labore!",
        likesCount: 1923422,
        time: 222
      },
      {
        id: 2,
        postDescription:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error beatae excepturi, \
            commodi minus asperiores nam delectus, ut, accusantium fugiat totam accusamus sed. \
            Ea id harum veniam voluptas fuga, et qui obcaecati, omnis consequatur fugiat voluptate \
            nam excepturi ipsum corporis quam dolore fugit laboriosam dolor ipsa rerum saepe enim? \
            Sed, excepturi?",
        likesCount: 45,
        time: 222
      },
      {
        id: 3,
        postDescription:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error beatae excepturi, \
            commodi minus asperiores nam delectus, ut, accusantium fugiat totam accusamus sed. \
            Ea id harum veniam voluptas fuga, et qui obcaecati",
        likesCount: 3,
        time: 222
      },
      {
        id: 4,
        postDescription:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error beatae excepturi, \
            commodi minus asperiores nam delectus, ut, accusantium fugiat totam accusamus sed. \
            Ea id harum veniam voluptas fuga, et qui obcaecati",
        likesCount: 2086,
        time: 222
      },
      {
        id: 5,
        postDescription:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error beatae excepturi, \
            commodi minus asperiores nam delectus, ut, accusantium fugiat totam accusamus sed. \
            Ea id harum veniam voluptas fuga, et qui obcaecatii",
        likesCount: 54673,
        time: 222
      }
    ]
  }
};

it("id of added post should be incremented ", () => {
  //1. test data
  let action = addPost("Hello! I'm new member)");

  //2.action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.profile.posts[0].id).toBe(6);
});

it("length of posts should be incremented ", () => {
  //1. test data
  let action = addPost("Hello! I'm new member)");

  //2.action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.profile.posts.length).toBe(6);
});

it("message of new post should be correct ", () => {
  //1. test data
  let action = addPost("Hello! I'm new member)");

  //2.action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.profile.posts[0].postDescription).toBe(
    `Hello! I'm new member)`
  );
});

it("count of likes of new added post should be 0", () => {
  //1. test data
  let action = addPost("Hello! I'm new member)");

  //2.action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.profile.posts[0].likesCount).toBe(0);
});
