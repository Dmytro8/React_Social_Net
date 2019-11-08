import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5000/auth/me/"
});

export const authAPI = {
  signIn(email = "", password = "") {
    return instance.get(`${email}-${password}`).then(response => {
      return response.data;
    });
  }
};
