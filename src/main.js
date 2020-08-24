import Vue from "vue";
import Buefy from "buefy";
import App from "./App.vue";

import Toasted from "vue-toasted";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(Toasted, {
  position: "bottom-right",
  duration: 4000,
  action: [
    {
      text: "Close",
      onClick: (e, toastObject) => {
        toastObject.goAway(0);
      }
    }
  ]
});
new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
