import Favorite from "@/pages/FavoritePage";
import Top from "@/pages/TopPage";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Top",
      component: Top
    },
    {
      path: "/favorite",
      name: "Favorite",
      component: Favorite
    },
  ]
});
