<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.jpeg" />
    <LineLiff />
  </div>
</template>

<script>
import LineLiff from "./components/LineLiff.vue";

export default {
  name: "App",
  components: {
    LineLiff,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div{
  width: 400px;
  margin: 0 auto;
}
img {
  width: 100%;
}
</style>
