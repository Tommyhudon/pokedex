import {} from "../action-types";
import { GET_EVOLUTION } from "../action-types";
import { SET_EVOLUTION } from "../mutation-types";
import evolutionService from "@/services/evolution";

const initialState = {
  evolution: null
};

export const state = { ...initialState };

export const actions = {
  async [GET_EVOLUTION](context, pokemonId) {
    const { data } = await evolutionService.getEvolution(pokemonId);
    context.commit(SET_EVOLUTION, data.chain.evolves_to[0].species.name);
    return data.chain.evolves_to[0].species.name;
  }
};

export const mutations = {
  [SET_EVOLUTION](state, evolution) {
    state.evolution = evolution;
  }
};

const getters = {
  evolution(state) {
    return state.evolution;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
