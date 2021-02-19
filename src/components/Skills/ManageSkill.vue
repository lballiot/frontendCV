<template>
  <div class="main">
    <div class="main-card-header">
      <h2>Gestion des projets de la competence : {{ skill.nom_competence }}</h2>
      <button class="btn-cancel">
        <router-link to="/competences">
          Retour
        </router-link>
      </button>
    </div>
    <div class="main-card-body">
      <div class="card-crud">
        <form class="form-manage" action="" @submit.prevent="submit">
          <h4>Assigner la compétence à un projet</h4>
          <div class="card-manage-btn">
            <select v-model="projetSelected" placeholder="Projet">
              <option value="0" disabled selected>
                Sélectionner un projet à ajouter
              </option>

              <option
                v-for="projet in listeProjets"
                :key="projet.id"
                :value="projet.id"
              >
                {{ projet.nom }}
              </option>
            </select>
            <button class="btn-submit">
              Ajouter
            </button>
          </div>
        </form>
        <div class="separator"></div>
        <div class="liste-manage">
          <h5>
            Listes des projets utilisant la compétence "{{
              skill.nom_competence
            }}"
          </h5>
          <span
            class="liste-manage-item"
            v-for="projet in skill.lesProjets"
            :key="projet.id"
          >
            {{ projet.nom }}
            <i class="fas fa-trash-alt" @click="deleteLiaison(projet.id)"></i>
          </span>
          <span class="liste-manage-item" v-if="skill.lesProjets.length < 1">
            Aucun projet
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";

export default {
  name: "ManageSkill",
  data() {
    return {
      skill: {
        id: 0,
        nom_competence: "",
        icon_competence: "",
        lesProjets: []
      },
      listeProjets: [],
      projetSelected: 0
    };
  },
  methods: {
    getCompetence: function() {
      let params = new FormData();
      params.append("id", this.skill.id);
      Api.find("getCompetence", params)
        .then(response => {
          this.skill = response;
        })
        .catch(error => console.log(error));
    },
    submit: function() {
      let params = new FormData();
      params.append("id", this.skill.id);
      params.append("idProjet", this.projetSelected);
      Api.maj("manageCompetence", params)
        .then(response => {
          // Rafraichissement des infos
          this.projetSelected = 0;
          this.getCompetence();
        })
        .catch(error => console.log(error));
    },
    deleteLiaison: function(id) {
      let params = new FormData();
      params.append("id", this.skill.id);
      params.append("idProjet", id);
      params.append("delete", "delete");
      Api.maj("manageCompetence", params)
        .then(() => {
          this.getCompetence();
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.skill.id = this.$route.params.id;
    this.getCompetence();
    Api.get("listeProjets")
      .then(response => {
        this.listeProjets = response;
      })
      .catch(error => console.log(error));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
