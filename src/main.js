import "vue-awesome/icons";

import Vue from "vue";
import Icon from "vue-awesome/components/Icon";

import App from "./App.vue";

Vue.config.productionTip = false;
Vue.component("v-icon", Icon);

new Vue({
  render: h => h(App)
}).$mount("#app");
