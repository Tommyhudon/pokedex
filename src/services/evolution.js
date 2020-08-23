import api from "./api";

const getEvolution = url => {
  return api.get(`${url}`);
};

export default {
  getEvolution
};
