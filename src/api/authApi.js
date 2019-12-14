import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5000/auth"
});

export const authAPI = {
  login(email = "", password = "") {
    // return instance.get(`login/${email}-${password}`).then(response => {
    //   return response.data;
    // });

    return instance
      .post(
        "",
        { email, password }
        // { withCredentials: true }
      )
      .then(() =>
        instance.get("/login").then(response => {
          return response.data;
        })
      );
  },
  logout() {
    return instance.delete(`/login`);
  }
};
