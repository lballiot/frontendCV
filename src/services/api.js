import axios from "axios";
import param from "../config/params";

export default {
  async get(type) {
    return axios.get(param[type]).then(response => {
      return response.data;
    });
  },
  async maj(type, params) {
    return axios.post(param[type], params).then(response => {
      return response.data;
    });
  },
  //get only one participant/video with the id
  async find(type, params) {
    return axios.post(param[type], params).then(response => {
      return response.data;
    });
  }
};
