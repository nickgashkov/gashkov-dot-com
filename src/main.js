import "vue-awesome/icons/external-link-alt";
import "vue-awesome/icons/brands/github";
import "vue-awesome/icons/brands/linkedin";

import smoothscroll from "smoothscroll-polyfill";

import Vue from "vue";
import Icon from "vue-awesome/components/Icon";

import App from "./App.vue";

smoothscroll.polyfill();

Vue.config.productionTip = false;
Vue.component("app-icon", Icon);

new Vue({
  render: h => h(App)
}).$mount("#app");
