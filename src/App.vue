<template>
  <div id="app">
    <Banner />
    <Pokemon />
    <PokemonList />
  </div>
</template>

<script>
import Pokemon from "./components/Pokemon.vue";
import PokemonList from "@/components/PokemonList";
import Banner from "@/components/Banner";

export default {
  name: "App",
  components: {
    Pokemon,
    PokemonList,
    Banner
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
