<template>
  <div v-if="types">
    <span id="pokemon-type-1">
      {{ types[0].type.name }}
    </span>
    <span id="pokemon-type-2" v-if="types[1]"> {{ types[1].type.name }} </span>
  </div></template
>

<script>
export default {
  name: "Type",
  props: ["types"],
  mounted() {
    this.init();
  },
  watch: {
    types: function() {
      this.init();
    }
  },
  methods: {
    init: function() {
      let type1 = document.getElementById("pokemon-type-1");
      this.assignColor(type1);
      if(this.types[1]) {
        let type2 = document.getElementById("pokemon-type-2");
        this.assignColor(type2);
      }
    },
    assignColor: function(span) {
      let color;
      switch (span.textContent) {
      case "grass":
        color = "#9bcc50";
        break;
      case "poison":
        color = "#A040A0";
        break;
      case "water":
        color = "#6890F0";
        break;
      case "fire":
        color = "#fd7d24";
        break;
      case "flying":
        color = "#A890F0";
        break;
      case "normal":
        color = "#A8A878";
        break;
      case "fighting":
        color = "#C03028";
        break;
      case "ground":
        color = "#E0C068";
        break;
      case "bug":
        color = "#A8B820";
        break;
      case "electric":
        color = "#F8D030";
        break;
      case "fairy":
        color = "#EE99AC";
        break;
      case "psychic":
        color = "#F85888";
        break;
      case "dragon":
        color = "#7038F8";
        break;
      case "dark":
        color = "#705848";
        break;
      case "ghost":
        color = "#705898";
        break;
      case "steel":
        color = "#B8B8D0";
        break;
      case "ice":
        color = "#98D8D8";
        break;
      }
      span.textContent =
        span.textContent.charAt(0).toUpperCase() + span.textContent.slice(1);
      span.style.backgroundColor = color;
    }
  }
};
</script>

<style scoped lang="scss">
span {
  padding: 5px;
  font-weight: normal;
}
</style>
