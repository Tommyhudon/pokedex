<template>
  <div class="banner">
    <img src="../images/pokemon.png" alt="pokemon logo" />
  </div>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style scoped lang="scss">
.banner {
  background-color: #ff0000;
  display: flex;
  flex-direction: row;
  img {
    height: auto;
    width: 8%;
    margin-left: 25%;
  }
}
@media screen and (max-width: 900px) {
  .banner {
    img {
      margin-left: 2%;
      width: 20%;
    }
  }
}
</style>
