<template>
  <div id="app">
    <Banner />
    <Pokemon />
    <Explorer />
  </div>
</template>

<script>
import Pokemon from "./components/Pokemon.vue";
import Explorer from "@/components/Explorer";
import Banner from "@/components/Banner";

export default {
  name: "App",
  components: {
    Pokemon,
    Explorer,
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
