// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
//import custom components
import HelloWorld from "./components/HelloWorld";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Training from "./components/Training";

import "bootstrap/dist/css/bootstrap.css";
// import "@/assets/scss/_vars.scss";

Vue.config.productionTip = false;

//tell vue to use the router
Vue.use(VueRouter);

//define your routes
const routes = [
  { path: "/", component: Home },
  { path: "/About", component: About },
  { path: "/Contact", component: Contact },
  { path: "/Training", component: Training },
  { path: "/Hello", component: HelloWorld }
];

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for routes: routes
  mode: "history"
});

/* eslint-disable no-new */
new Vue({
  //define the selector for the root component
  el: "#app",
  //pass the template to the root component
  template: "<App/>",
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount("#app"); //mount the router on the app
