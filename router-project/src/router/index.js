import Vue from 'vue'
import * as VueRouter from  'vue-router'

//Step1-- defining the components required to route.
//Step2 --- first install vue-router to be able to use it below./ write the router>index.js file
//Step3 --- add the routes in main.js file.

import Home from '../components/Home.vue'
import Contact from '../components/Contact.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router