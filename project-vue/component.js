export default {
  data() {
    return { title: "Button Counter!!", count: 0 };
  },
  template: `<div class ="count">
  <p>{{title}}</p>
  <button @click="count++">
  Count is {{count}}
</button>
  </div>`,
};
