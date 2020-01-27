import axios from "axios";

const instance = axios.create({
  baseURL: ""
});

export const profileAPI = {
  getStatus() {
    return instance.get().then(response => {
      return response;
    });
  },
  updateStatus() {
    return instance.put().then(response => {
      return response;
    });
  }
};
