<template>
  <div>
    <h1 v-bind:class="[active, error]">Class binding using the array syntax</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Home",
      active: true,
      error: false,
    };
  },
};
</script>
<style>
.active {
  color: rgb(0, 21, 255);
}
.text-danger {
  color: red;
}
</style>
