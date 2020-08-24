import api from "./api";

const getPokemon = pokemonName => {
  return api.get(`/pokemon/${pokemonName}`);
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
