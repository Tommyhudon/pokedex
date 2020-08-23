import {} from "../action-types";
import { GET_POKEMON, GET_POKEMONS } from "../action-types";
import { SET_SELECTED_POKEMON, SET_POKEMONS } from "../mutation-types";
import pokemonService from "@/services/pokemons";

const initialState = {
  pokemons: [],
  selectedPokemon: 1,
  selectedPokemonEvolution: null
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
  }
};
export const mutations = {
  [SET_SELECTED_POKEMON](state, selectedPokemon) {
    state.selectedPokemon = selectedPokemon;
  },
  [SET_POKEMONS](state, pokemons) {
    state.pokemons = pokemons;
  }
};

const getters = {
  pokemons(state) {
    return state.pokemons;
  },
  selectedPokemon(state) {
    return state.selectedPokemon;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
