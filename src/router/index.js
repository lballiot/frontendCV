import Vue from "vue";
import Router from "vue-router";
import Accueil from "@/components/Accueil";

// Projet
import Projets from "@/components/Projets";
import CreateProjet from "@/components/Projets/CreateProjet";

// Skills
import Skills from "@/components/Skills";
import CreateSkill from "@/components/Skills/CreateSkill";

// Notions
import Notions from "@/components/Notions";
import CreateNotion from "@/components/Notions/CreateNotion";

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
      path: "/creer-projet",
      name: "CreateProjet",
      component: CreateProjet
    },
    {
      path: "/competences",
      name: "Skills",
      component: Skills
    },
    {
      path: "/creer-skill",
      name: "CreateSkill",
      component: CreateSkill
    },
    {
      path: "/notions",
      name: "Notions",
      component: Notions
    },
    {
      path: "/creer-notion",
      name: "CreateNotion",
      component: CreateNotion
    }
  ]
});
