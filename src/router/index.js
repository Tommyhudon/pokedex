import Vue from "vue";
import Router from "vue-router";

import Pokemon from "@/components/Pokemon";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/pokemon/:name",
      name: "Pokemon",
      component: Pokemon
    },
    {
      path: "/",
      redirect: "/pokemon/bulbasaur"
    }
  ]
});

export default router;
