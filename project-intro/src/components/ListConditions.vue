<script>
export default {
  data() {
    return {
      message: "Hello, Button COUNTER!",
      count: 0,

      parentMessage: "Parent",
      items: [
        { id: 1, title: "Element 1", message: "Foo" },
        { id: 2, title: "Element 2", message: "Bar" },
      ],
      students: [
        { name: "Mercy", age: 10 },
        { name: "Jane", age: 9 },
        { name: "Austin", age: 20 },
        { name: "Miya", age: 16 },
        { name: "Miya", age: 4 },
        { name: "Miya", age: 28 },
        { name: "Miya", age: 14 },
      ],
      myObject: {
        title: "How to do rendering in lists in Vue",
        author: "Start with y",
        publishedAt: "2016-04-10",
      },
    };
  },
  computed: {
    ageComparison() {
      return this.students.filter((s) => (s.age < 18 ? s : ""));
    },
  },
};
</script>

<template>
  <div class="wrapper">
    <!-- <h1>{{ title }}</h1> -->
    <div class="message">{{ message }}</div>
    <button @click="count++" class="btn">Count</button>
    <p>The count is {{ count }}</p>

    <!-- <button v-bind:disabled="isbuttonDisabled">Button</button> -->
    <ul>
      <!-- list rendering -->
      <li v-for="(item, index) in items" v-bind:key="item.id">
        {{ key }}. {{ item.title }} is the {{ parentMessage }} - {{ index }} -
        {{ item.message }}
      </li>

      <!-- list rendering using keys -->
      <li v-for="item in myObject" v-bind:key="item">
        {{ item }}
      </li>

      <li v-for="(value, key) in myObject" v-bind:key="value.title">
        {{ key }} : {{ value }}
      </li>
    </ul>

    <div>
      <h3>Students who have their age less than 18yrs-</h3>
      <ul>
        <li v-for="(st, index) in ageComparison" v-bind:key="index">
          {{ st.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
@import "../styles.scss";
</style>
