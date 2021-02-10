// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

// Import de Bootstrap-vue
import BootstrapVue from "bootstrap-vue";
// Import des style de boostrap-vue
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Import Vue-moment
import VueMoment from "vue-moment";

// Utilisation de Bootstrap-vue
Vue.use(BootstrapVue);

// Utilisation de Vue-moment
Vue.use(VueMoment);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
