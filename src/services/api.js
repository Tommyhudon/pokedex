import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

class Api {
  constructor() {
    if (!process.env.VUE_APP_API_URL) {
      throw new Error("API_URL is undefined");
    }

    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = process.env.VUE_APP_API_URL;

    Vue.axios.interceptors.response.use(this.handleSuccess);
  }

  handleSuccess(response) {
    return response;
  }

  get(endpoint, params) {
    return Vue.axios.get(endpoint, { params });
  }
}

const api = new Api();
export default api;
