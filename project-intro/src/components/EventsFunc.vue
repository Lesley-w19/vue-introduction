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
    sayhello(event) {
      // `this` inside methods points to the Vue instance
      alert("Hello " + this.name + "!");
      // `event` is the native DOM event
      if (event) {
        alert(event.target.tagName);
      }
    },
    doThis() {
      alert("form submitted!");
    },
    addCounts() {
      this.$data.counts += 1;
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <h1>{{ title }}</h1>
    <button @click.prevent="counts += 1" class="btn">Add Counts</button>
    <p>The button above has been clicked {{ counts }} times.</p>
    <div id="event-with-method" class="demo">
      <!-- `greet` is the name of a method defined below -->
      <button v-on:click="sayhello" class="btn">Say hi</button>

      <button @click.stop="addCounts" class="btn">Stop Counts</button>
    </div>

    <!-- the submit event will no longer reload the page -->
    <form @submit.prevent="doThis"></form>

    <!-- conditional rendering -->
    <h1 v-if="condition">I have not worked out.</h1>
    <!-- Displayed as the above condition is not fullfilled-->
    <h1 v-else>I have worked out.</h1>

    <!-- //form input binding -->

    <div id="databinding">
      <h6>Examples of form input bindings using modifiers</h6>
      <h3>The .number modifier example</h3>
      <span style="font-size: 20px">Enter Count number:</span>

      <input v-model.number="counts" type="number" />
      <!--  used when you want user input to be immediately typecast into a number. It simply allows you to type in numbers. -->
      <br />
      <br />
      <hr />
      <h3>The .lazy modifier example</h3>
      <span style="font-size: 20px">Enter Your given comments here:</span>
      <input v-model.lazy="msg" />
      <!-- It's used to show the content in the textbox only when the user has finished typing and exited the textbox -->
      <h4>Display your comments : {{ msg }}</h4>
      <br />
      <hr />
      <h3>The .trim modifier example</h3>
      <span style="font-size: 20px">Enter your comment : </span
      ><input v-model.trim="message" />
      <!-- used to automatically clip whitespace from user input -->
      <h4>Display comment : {{ message }}</h4>
    </div>
  </div>
</template>

<style lang="scss">
@import "../styles.scss";
</style>
