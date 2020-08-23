<template>
  <div class="container">
    <div class="pokeball"></div></div
></template>

<script>
export default {
  name: "Loading"
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  .pokeball {
    height: 250px;
    width: 250px;
    border: 13px solid #383b4f;
    border-radius: 50%;
    background-image: linear-gradient(#f51939 125px, white 125px);
    position: relative;
    animation: load 2s infinite;

    @keyframes load {
      50% {
        transform: scale(0.7);
      }
    }
  }
  .pokeball:before {
    position: absolute;
    content: "";
    height: 25px;
    width: 250px;
    background-color: #383b4f;
    top: 112.5px;
    left: 0;
  }

  .pokeball:after {
    position: absolute;
    content: "";
    height: 90px;
    width: 90px;
    background-image: radial-gradient(
      #ffffff 0px,
      #ffffff 10px,
      #383b4f 10px,
      #383b4f 15px,
      #ffffff 15px,
      #ffffff 32px,
      #383b4f 32px
    );
    border-radius: 50%;
    top: 80px;
    left: 80px;
  }
}
</style>
