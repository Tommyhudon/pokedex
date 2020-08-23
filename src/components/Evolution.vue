<template
  ><div v-if="evolution">
    <Span> {{ evolution.name }}</Span>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { GET_EVOLUTION } from "@/store/action-types";

export default {
  name: "Evolution",
  props: {
    pokemonId: Number
  },
  mounted() {
    this.loadEvolution();
  },
  watch: {
    "$route.params.name": function() {
      this.loadEvolution();
      console.log(this.evolution);
    }
  },
  methods: {
    loadEvolution: function() {
      this.$store.dispatch(GET_EVOLUTION, this.pokemonId);
    }
  },
  computed: mapState({
    evolution: state => state.evolution.evolution
  })
};
</script>

<style scoped></style>
