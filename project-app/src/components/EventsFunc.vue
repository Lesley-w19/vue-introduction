<script>
export default {
  data() {
    return {
      name: "Vue.js",
      counts: 0,
      condition: false,
      msg: "",
      message: "",
    };
  },
  props: {
    title: String,
  },
  methods: {
    greet(event) {
      // `this` inside methods points to the Vue instance
      alert("Hello " + this.name + "!");
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName);
      }
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <h1>{{ title }}</h1>
    <button @click="counts += 1" class="btn">Add Counts</button>
    <p>The button above has been clicked {{ counts }} times.</p>
    <div id="event-with-method" class="demo">
      <!-- `greet` is the name of a method defined below -->
      <button v-on:click="greet" class="btn">Say hi</button>
    </div>
    <div>
      <!-- conditional rendering -->
      <h1 v-if="condition">I am not visible.</h1>
      <!-- Displayed as the above condition is not fullfilled-->
      <h1 v-else>I am visible.</h1>
    </div>

    <!-- //form input binding -->
    <div id="databinding">
      <h3>The .number modifier example</h3>
      <span style="font-size: 20px">Enter Count:</span>
      <input v-model.number="count" type="number" />
      <br />
      <br />
      <hr />
      <h3>The .lazy modifier example</h3>
      <span style="font-size: 20px">Enter Message:</span>
      <input v-model.lazy="msg" />
      <h4>Display Message : {{ msg }}</h4>
      <br />
      <hr />
      <h3>The .trim modifier example</h3>
      <span style="font-size: 20px">Enter Message : </span
      ><input v-model.trim="message" />
      <h4>Display Message : {{ message }}</h4>
    </div>
  </div>
</template>

<style lang="scss">
@import "../styles.scss";
</style>
