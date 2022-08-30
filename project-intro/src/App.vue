<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <ListConditions />
    <EventsF title="Events and functions in VueJS" />
    <AboutClass />
  </div>
</template>

<script>
import ListConditions from "./components/ListConditions.vue";
// import HelloWorld from "./components/HelloWorld.vue";
import EventsF from "./components/EventsFunc.vue";
import AboutClass from "./components/AboutClass.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    ListConditions,
    EventsF,
    AboutClass,
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
</style>
