<template>
  <div class="main">
    <div v-if="!loading">
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
            <div class="evolution-container" v-if="pokemonEvolution">
              <span>Evolution:</span>
              <span
                v-for="evolution in pokemonEvolution"
                :key="evolution.species.name"
              >
                <router-link v-bind:to="`/pokemon/${evolution.species.name}`">{{
                  evolution.species.name
                }}</router-link></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <Loading v-if="loading"></Loading>
  </div>
</template>

<script>
import Vue from "vue";
import Loading from "@/components/Loading";
import { mapState } from "vuex";
import { GET_EVOLUTION, GET_POKEMON, GET_SPECIES } from "@/store/action-types";

export default {
  data: function() {
    return {
      pokemonEvolution: null,
      loading: true
    };
  },
  components: {
    Loading
  },
  async mounted() {
    await this.loadPokemon();
  },
  watch: {
    "$route.params.name": async function() {
      this.loading = true;
      await this.loadPokemon();
    },
    species: async function() {
      await this.loadEvolution();
    },
    evolution: function() {
      this.findInChain(this.evolution);
      this.loading = false;
    }
  },
  methods: {
    loadPokemon: function() {
      const pokemonName = this.$route.params.name;
      this.$store.dispatch(GET_POKEMON, pokemonName).catch(err => {
        Vue.toasted.error(err);
      });
      this.$store.dispatch(GET_SPECIES, pokemonName).catch(err => {
        Vue.toasted.error(err);
      });
    },
    loadEvolution: function() {
      this.$store
        .dispatch(GET_EVOLUTION, this.species.evolution_chain.url)
        .catch(err => {
          Vue.toasted.error(err);
        });
    },
    findInChain: function(chain) {
      console.log(this.pokemon.name);
      if (chain.species.name === this.pokemon.name) {
        console.log(chain.species.name);
        if (chain.evolves_to.length === 0) {
          this.pokemonEvolution = null;
        } else {
          this.pokemonEvolution = chain.evolves_to;
        }
      } else {
        if (chain.evolves_to.length === 1) {
          this.findInChain(chain.evolves_to[0]);
        } else {
          this.pokemonEvolution = null;
        }
      }
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
        display: flex;
        align-items: center;
        div {
          padding-right: 5px;
        }
      }
      .evolution-container {
        display: flex;
        flex-wrap: wrap;
        span {
          padding-right: 1px;
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
