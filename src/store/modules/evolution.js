import {} from "../action-types";
import { GET_EVOLUTION } from "../action-types";
import { SET_EVOLUTION } from "../mutation-types";
import evolutionService from "@/services/evolution";

const initialState = {
  evolutionChain: null
};

export const state = { ...initialState };

export const actions = {
  async [GET_EVOLUTION](context, pokemonId) {
    const { data } = await evolutionService.getEvolution(pokemonId);
    context.commit(SET_EVOLUTION, data.chain);
    return data.chain;
  }
};

export const mutations = {
  [SET_EVOLUTION](state, evolution) {
    state.evolutionChain = evolution;
  }
};

const getters = {
  evolutionChain(state) {
    return state.evolutionChain;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
