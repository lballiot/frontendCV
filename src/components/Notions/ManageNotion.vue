<template>
  <div class="main">
    <div class="main-card-header">
      <h2>Gestion des projets de la notion : {{ notion.nom_notion }}</h2>
      <button class="btn-cancel">
        <router-link to="/notions">
          Retour
        </router-link>
      </button>
    </div>
    <div class="main-card-body">
      <div class="card-crud">
        <form class="form-manage" action="" @submit.prevent="submit">
          <h4>Assigner la notion à un projet</h4>
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
            Listes des projets traitant la notion "{{ notion.nom_notion }}"
          </h5>
          <span
            class="liste-manage-item"
            v-for="projet in notion.lesProjets"
            :key="projet.id"
          >
            {{ projet.nom }}
            <i class="fas fa-trash-alt" @click="deleteLiaison(projet.id)"></i>
          </span>
          <span class="liste-manage-item" v-if="notion.lesProjets.length < 1">
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
  name: "ManageNotion",
  data() {
    return {
      notion: {
        id: 0,
        nom_notion: "",
        lesProjets: []
      },
      listeProjets: [],
      projetSelected: 0
    };
  },
  methods: {
    getNotion: function() {
      let params = new FormData();
      params.append("id", this.notion.id);
      Api.find("getNotion", params)
        .then(response => {
          this.notion = response;
        })
        .catch(error => console.log(error));
    },
    submit: function() {
      let params = new FormData();
      params.append("id", this.notion.id);
      params.append("idProjet", this.projetSelected);
      Api.maj("manageNotion", params)
        .then(response => {
          // Rafraichissement des infos
          this.projetSelected = 0;
          this.getNotion();
        })
        .catch(error => console.log(error));
    },
    deleteLiaison: function(id) {
      let params = new FormData();
      params.append("id", this.notion.id);
      params.append("idProjet", id);
      params.append("delete", "delete");
      Api.maj("manageNotion", params)
        .then(() => {
          this.getNotion();
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.notion.id = this.$route.params.id;

    this.getNotion();
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
