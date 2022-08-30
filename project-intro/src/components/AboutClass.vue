<template>
  <div>
    <div>
      <h1 v-bind:class="['active', 'error']">
        Class binding using the array syntax
      </h1>
    </div>

    <div>
      <h1 v-bind:class="[{ active: 'active' }, { error: 'text-danger' }]">
        Class binding using the array syntax with their styles.
      </h1>
    </div>
    <div>
      <h1 v-bind:style="{ color: red, fontSize: fontSize + `px` }">
        Styles binding. Work as inline css.
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Home",
      active: true,
      error: false,
      fontSize: 40,
      red: "red",
    };
  },
};
</script>
<style>
.active {
  color: rgb(255, 98, 0);
}
.text-danger {
  color: red;
}
</style>
