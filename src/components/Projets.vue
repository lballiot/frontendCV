<template>
  <div class="main">
    <div class="main-card-header">
      <h2>Liste des projets réalisés :</h2>
      <span title="Créer un nouveau projet">
        <router-link to="/create-project">
          <i class="fa fa-plus fa-2x"></i>
        </router-link>
      </span>
    </div>
    <div class="main-card-body">
      <div class="box-project" v-for="projet in listeProject" :key="projet.id">
        <div class="box-project-change">
          <span title="Modifier le projet">
            <router-link to="#">
              <i class="fas fa-edit"></i>
            </router-link>
          </span>
          <span title="Supprimer le projet">
            <router-link to="#">
              <i class="fas fa-trash-alt"></i>
            </router-link>
          </span>
        </div>
        <img :src="projet.image" :alt="projet.nom" />
        <div class="box-project-details">
          <h4>{{ projet.nom }}</h4>
          <div class="separator"></div>
          <p class="box-project-date">
            Date de réalisation :
            <span>{{ projet.date | moment("DD/MM/YYYY") }}</span>
          </p>
          <p class="box-project-type">
            Type de site :
            <strong> {{ projet.leTypeDuProjet.nom_type }}</strong>
          </p>
          <p
            class="box-project-competences"
            v-if="projet.lesCompetencesUtilises.length > 0"
          >
            Compétences utilisées :
            <span
              v-for="competence in projet.lesCompetencesUtilises"
              :key="competence.id"
            >
              {{ competence.nom_competence }},
            </span>
          </p>
          <p
            class="box-project-notions"
            v-if="projet.lesNotionsTraitees.length > 0"
          >
            Notions traitées :
            <span v-for="notion in projet.lesNotionsTraitees" :key="notion.id">
              {{ notion.nom_notion }},
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";

export default {
  name: "Projets",
  data() {
    return {
      listeProject: []
    };
  },
  created() {
    Api.get("listeProjets").then(response => {
      this.listeProject = response;
      console.log("liste projet", this.listeProject);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
