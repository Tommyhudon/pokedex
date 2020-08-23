import api from "./api";

const getPokemon = pokemonId => {
  return api.get(`/pokemon/${pokemonId}`);
};

const getPokemons = url => {
  return api.get(`${url}`);
};

const getPokemonSpecies = pokemonName => {
  return api.get(`/pokemon-species/${pokemonName}`);
}

export default {
  getPokemon,
  getPokemons,
  getPokemonSpecies
};
