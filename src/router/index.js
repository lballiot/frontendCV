import Vue from "vue";
import Router from "vue-router";
import Accueil from "@/components/Accueil";

// Projet
import Projets from "@/components/Projets";
import CreateProjet from "@/components/Projets/CreateProjet";
import UpdateProjet from "@/components/Projets/UpdateProjet";
import DeleteProjet from "@/components/Projets/DeleteProjet";

// Skills
import Skills from "@/components/Skills";
import CreateSkill from "@/components/Skills/CreateSkill";
import UpdateSkill from "@/components/Skills/UpdateSkill";
import DeleteSkill from "@/components/Skills/DeleteSkill";

// Notions
import Notions from "@/components/Notions";
import CreateNotion from "@/components/Notions/CreateNotion";
import UpdateNotion from "@/components/Notions/UpdateNotion";
import DeleteNotion from "@/components/Notions/DeleteNotion";

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
      path: "/modifier-projet/:id",
      name: "UpdateProjet",
      component: UpdateProjet
    },
    {
      path: "/supprimer-projet/:id",
      name: "DeleteProjet",
      component: DeleteProjet
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
      path: "/modifier-skill/:id",
      name: "UpdateSkill",
      component: UpdateSkill
    },
    {
      path: "/supprimer-skill/:id",
      name: "DeleteSkill",
      component: DeleteSkill
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
    },
    {
      path: "/modifier-notion/:id",
      name: "UpdateNotion",
      component: UpdateNotion
    },
    {
      path: "/supprimer-notion/:id",
      name: "DeleteNotion",
      component: DeleteNotion
    }
  ]
});
