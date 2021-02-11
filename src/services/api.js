import axios from "axios";
import param from "../config/params";

export default {
  async get(type) {
    return axios.get(param[type]).then(response => response.data);
  },
  async maj(type, params) {
    return axios.post(param[type], params).then(response => {
      return response.data;
    });
  },
  async find(type, id) {
    console.log(type);
    console.log(id);
    return axios.get(param[type] + "?id=" + id).then(response => response.data);
  }
};
