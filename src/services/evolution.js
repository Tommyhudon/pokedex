import api from "./api";

const getEvolution = pokemonId => {
  return api.get(`/evolution-chain/${pokemonId}`);
};

export default {
  getEvolution
};
