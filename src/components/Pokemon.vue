<template>
  <div class="main">
    <div v-if="pokemon">
      <header class="header">#{{ pokemon.id }} {{ pokemon.name }}</header>
      <div v-if="pokemon.id" class="selected-pokemon">
        <div class="pokemon-image-container">
          <img
            alt="pokemon"
            v-bind:src="
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
                pokemon.id +
                '.png'
            "
          />
        </div>
        <div class="pokemon-information-container">
          <div class="pokemon-information">
            <span>Weight: {{ pokemon.weight }} </span>
            <span>Height: {{ pokemon.height }}</span>
            <div class="pokemon-type-container">
              <span>Types:</span>
              <div v-for="type in pokemon.types" :key="type.slot">
                {{ type.type.name }}
              </div>
            </div>
            <span
              >Evolution:
              <router-link v-bind:to="`/pokemon/${evolution}`">{{
                evolution
              }}</router-link></span
            >
          </div>
        </div>
      </div>
    </div>
    <Loading v-if="!pokemon"></Loading>
  </div>
</template>

<script>
import Loading from "@/components/Loading";
import { mapState } from "vuex";
import { GET_EVOLUTION, GET_POKEMON, GET_SPECIES } from "@/store/action-types";

export default {
  components: {
    Loading
  },
  async mounted() {
    await this.loadPokemon();
  },
  watch: {
    "$route.params.name": async function() {
      await this.loadPokemon();
    },
    species: function() {
      this.loadEvolution();
    }
  },
  methods: {
    loadPokemon: function() {
      const pokemonName = this.$route.params.name;
      this.$store.dispatch(GET_POKEMON, pokemonName);
      this.$store.dispatch(GET_SPECIES, pokemonName);
    },
    loadEvolution: function() {
      this.$store.dispatch(GET_EVOLUTION, this.species.evolution_chain.url);
    }
  },
  computed: mapState({
    pokemon: state => state.pokemons.selectedPokemon,
    species: state => state.pokemons.selectedPokemonSpecies,
    evolution: state => state.evolution.evolution
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  margin-top: 2%;
  font-family: "Arial Black", sans-serif;
  font-size: xx-large;
}
.selected-pokemon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0;
  align-items: center;
  .pokemon-image-container {
    width: 20%;
    img {
      width: 100%;
      height: auto;
    }
  }
  .pokemon-information-container {
    display: flex;
    align-content: center;
    border: black 3px solid;
    border-radius: 15px;
    width: 25%;
    .pokemon-information {
      display: flex;
      flex-direction: column;
      padding: 5px;
      height: auto;
      font-weight: bold;
      .pokemon-type-container {
        padding-top: 1em;
        padding-bottom: 1em;
        display: flex;
        align-items: center;
        div {
          padding-right: 5px;
        }
      }
      span {
        text-align: left;
        padding: 1em;
        font-size: medium;
      }
    }
  }
}
</style>
