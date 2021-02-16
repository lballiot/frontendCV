<template>
  <div class="main">
    <div class="main-card-header">
      <h2>Liste des compétences maîtrisées :</h2>
      <span title="Créer une nouvelle compétence">
        <router-link to="/creer-skill">
          <i class="fa fa-plus fa-2x"></i>
        </router-link>
      </span>
    </div>
    <div class="main-card-body">
      <div class="main-card-body-table">
        <b-table
          striped
          hover
          :items="listeSkills"
          :fields="cols"
          class="card-table"
        >
          <!-- Template projets -->
          <template v-slot:cell(lesProjets)="data">
            <span v-for="projet in data.item.lesProjets" :key="projet.id">
              {{ projet.nom }},
            </span>
          </template>

          <!-- Template icon -->
          <template v-slot:cell(icon_competence)="data">
            <i
              v-if="data.item.icon_competence != '.'"
              :class="data.item.icon_competence"
              class="fab fa-2x"
            ></i>
          </template>

          <!-- Template Actions -->
          <template v-slot:cell(actions)="data">
            <span title="Modifier la compétence">
              <router-link
                :to="{
                  name: 'UpdateSkill',
                  params: { id: data.item.id }
                }"
              >
                <i class="fas fa-edit"></i>
              </router-link>
            </span>
            <span title="Supprimer la compétence">
              <router-link
                :to="{
                  name: 'DeleteSkill',
                  params: { id: data.item.id }
                }"
              >
                <i class="fas fa-trash-alt"></i>
              </router-link>
            </span>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";

export default {
  name: "Skills",
  data() {
    return {
      cols: [
        { key: "nom_competence", sortable: true, label: "Nom" },
        { key: "lesProjets", sortable: true, label: "Projets" },
        { key: "icon_competence", sortable: false, label: "Icône" },
        { key: "actions", sortable: false, label: "Actions" }
      ],
      listeSkills: []
    };
  },
  created() {
    Api.get("listeCompetences")
      .then(response => {
        this.listeSkills = response;
        console.log("liste skills", this.listeSkills);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
