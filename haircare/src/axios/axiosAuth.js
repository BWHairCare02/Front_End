import axios from "axios";

export default () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://haircare-backend-dingo.herokuapp.com/",
    headers: {
      Authorization: token
    }
  });
};
