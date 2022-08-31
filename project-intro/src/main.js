import Vue, { h } from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  el: "#app",
}).$mount("#app");
