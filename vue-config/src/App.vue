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
      myObject: {
        title: "How to do lists in Vue",
        author: "Jane Doe",
        publishedAt: "2016-04-10",
      },
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="message">{{ message }}</div>
    <button @click="count++" class="btn">Count</button>
    <p>The count is {{ count }}</p>

    <!-- <button v-bind:disabled="isbuttonDisabled">Button</button> -->
    <ul>
      <!-- list rendering -->
      <li v-for="(item, index) in items">
        {{ item.id }}. {{ item.title }} is the {{ parentMessage }} -
        {{ index }} - {{ item.message }}
      </li>

      <!-- list rendering using keys -->
      <li v-for="item in myObject">
        {{ item }}
      </li>

      <li v-for="(item, key) in myObject">{{ key }} : {{ item }}</li>
    </ul>
  </div>
</template>

<template v-for="item in items">
  <li>{{ item.msg }}</li>
</template>

<style lang="scss">
@import "./styles.scss";
</style>
