import Vue from "vue";
import Router from "vue-router";
import Accueil from "@/components/Accueil";
import Projets from "@/components/Projets";
import Competences from "@/components/Competences";
import Notions from "@/components/Notions";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Accueil",
      component: Accueil
    },
    {
      path: "/projets",
      name: "Projets",
      component: Projets
    },
    {
      path: "/competences",
      name: "Competences",
      component: Competences
    },
    {
      path: "/notions",
      name: "Notions",
      component: Notions
    }
  ]
});
