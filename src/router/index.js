import Vue from "vue";
import Router from "vue-router";
import Accueil from "@/components/Accueil";

// Projet
import Projets from "@/components/Projets";
// import CreateProjet from "@/components/Projets/CreateProjet";

import Skills from "@/components/Skills";
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
    // {
    //   path: "/create-projet",
    //   name: "CreateProjet",
    //   component: CreateProjet
    // },
    {
      path: "/competences",
      name: "Skills",
      component: Skills
    },
    {
      path: "/notions",
      name: "Notions",
      component: Notions
    }
  ]
});
