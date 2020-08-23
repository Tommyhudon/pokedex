import {} from "../action-types";
import { GET_POKEMON, GET_POKEMONS } from "../action-types";
import {
  SET_SELECTED_POKEMON,
  SET_POKEMONS,
  SET_SPECIES
} from "../mutation-types";
import pokemonService from "@/services/pokemons";
import { GET_SPECIES } from "../action-types";

const initialState = {
  pokemons: [],
  selectedPokemon: 1,
  selectedPokemonSpecies: null
};

export const state = { ...initialState };

export const actions = {
  async [GET_POKEMONS](context, url) {
    const { data } = await pokemonService.getPokemons(url);
    context.commit(SET_POKEMONS, data);
    return data;
  },
  async [GET_POKEMON](context, pokemonId) {
    const { data } = await pokemonService.getPokemon(pokemonId);
    context.commit(SET_SELECTED_POKEMON, data);
    return data;
  },
  async [GET_SPECIES](context, pokemonName) {
    const { data } = await pokemonService.getPokemonSpecies(pokemonName);
    context.commit(SET_SPECIES, data);
    return data;
  }
};
export const mutations = {
  [SET_SELECTED_POKEMON](state, selectedPokemon) {
    state.selectedPokemon = selectedPokemon;
  },
  [SET_POKEMONS](state, pokemons) {
    state.pokemons = pokemons;
  },
  [SET_SPECIES](state, species) {
    state.selectedPokemonSpecies = species;
  }
};

const getters = {
  pokemons(state) {
    return state.pokemons;
  },
  selectedPokemon(state) {
    return state.selectedPokemon;
  },
  selectedPokemonSpecies(state) {
    return state.selectedPokemonSpecies;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
