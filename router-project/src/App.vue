<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-view /> -->

    <div>{{ products }}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  data() {
    return {
      products: [],
      url: "https://fakestoreapi.com/products",
    };
  },
  //using the created hook
  // async created() {
  //   try {
  //     const response = await axios.get(this.url);
  //     this.products = response.data;
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  //using the mounted hook
  async mounted() {
    try {
      const response = await axios.get(this.url);
      this.products = response.data;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped></style>
