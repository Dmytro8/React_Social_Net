import axios from "axios";

const instance = axios.create({
  // baseURL: "http://127.0.0.1:5000/users"
  baseURL: "https://python-api-social-net.herokuapp.com/users"
});

export const usersAPI = {
  getUsers() {
    return instance.get().then(response => {
      return response.data;
    });
  }
};
