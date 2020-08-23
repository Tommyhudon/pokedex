<template> <div id="pokemon-type"></div></template>

<script>
export default {
  name: "Type",
  props: ["name"],
  mounted() {
    this.assignColor();
  },
  methods: {
    assignColor: function() {
      let color;
      switch (this.name) {
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
      let typeSpan = document.createElement("span");
      typeSpan.textContent =
        this.name.charAt(0).toUpperCase() + this.name.slice(1);
      typeSpan.style.backgroundColor = color;
      typeSpan.style.padding = "5px";
      typeSpan.style.color = "white";
      typeSpan.style.fontWeight = "normal";
      let typeDiv = document.getElementById("pokemon-type");
      typeDiv.appendChild(typeSpan);
    }
  }
};
</script>

<style scoped lang="scss">
#pokemon-type {
  display: flex;
  justify-content: space-between;
}
</style>
