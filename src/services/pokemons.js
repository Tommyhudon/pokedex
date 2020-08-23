import api from "./api";

const getPokemon = pokemonId => {
  return api.get(`/pokemon/${pokemonId}`);
};

const getPokemons = url => {
  return api.get(`${url}`);
};

export default {
  getPokemon,
  getPokemons
};
