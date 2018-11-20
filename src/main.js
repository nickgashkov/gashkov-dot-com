import "vue-awesome/icons/external-link-alt";
import "vue-awesome/icons/heart";
import "vue-awesome/icons/brands/github";
import "vue-awesome/icons/brands/linkedin";

import Vue from "vue";
import Icon from "vue-awesome/components/Icon";

import App from "./App.vue";

Vue.config.productionTip = false;
Vue.component("v-icon", Icon);

new Vue({
  render: h => h(App)
}).$mount("#app");
