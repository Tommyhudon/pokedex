<template>
  <div class="pokemon-explorer">
    <div v-if="pokemons" class="pokemon-list">
      <button
        class="button-style"
        @click="previousPage"
        v-if="pokemons.previous"
      >
        <span>Previous</span>
      </button>
      <div
        class="pokemon"
        v-for="pokemon in pokemons.results"
        :key="pokemon.id"
        :pokemon="pokemon"
      >
        <router-link v-bind:to="`/pokemon/${pokemon.name}`">
          {{ pokemon.name }}
        </router-link>
      </div>
      <button class="button-style" @click="nextPage" v-if="pokemons.next">
        <span>Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import { GET_POKEMONS } from "@/store/action-types";
import { mapState } from "vuex";

export default {
  name: "Explorer",
  mounted() {
    this.loadPokemons();
  },
  methods: {
    loadPokemons: function() {
      this.$store.dispatch(
        GET_POKEMONS,
        "https://pokeapi.co/api/v2/pokemon/?limit=9&offset=0"
      );
    },
    nextPage: function() {
      this.$store.dispatch(GET_POKEMONS, this.pokemons.next);
    },
    previousPage: function() {
      this.$store.dispatch(GET_POKEMONS, this.pokemons.previous);
    }
  },
  computed: mapState({
    pokemons: state => state.pokemons.pokemons
  })
};
</script>

<style scoped lang="scss">
.pokemon-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  bottom: 5%;
  position: fixed;
  font-weight: bold;
  font-size: medium;
  .button-style {
    background-color: #ffde00;
    font-size: large;
    font-weight: bold;
    color: #3b4cca;
    border-radius: 4px;
    border-color: #3b4cca;
    &:hover {
      cursor: pointer;
    }
  }
  .pokemon {
    padding: 5px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
