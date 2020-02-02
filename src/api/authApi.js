import axios from "axios";

const instance = axios.create({
  //for Local Development
  // baseURL: "http://127.0.0.1:5000/auth"

  //using API from Heroku
  baseURL: "https://python-api-social-net.herokuapp.com/auth"
});

export const authAPI = {
  auth(email = "", password = "") {
    return instance.post("", { email, password }).then(response => {
      return response.data;
    });
  },
  login() {
    return instance.get("/login").then(response => {
      return response.data;
    });
  },
  logout() {
    return instance.put("/logout").then(response => {
      return response.data;
    });
  }
};
