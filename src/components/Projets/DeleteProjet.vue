<template>
  <div class="main">
    <div class="main-card-header">
      <h2>Suppression d'un projet :</h2>
    </div>
    <div class="main-card-body">
      <div class="card-crud card-projet">
        <div class="previewImage-projet">
          <img :src="imageData" alt="project" />
        </div>
        <form action="" @submit.prevent="submit">
          <div class="form-group">
            <label for="nom">Nom du projet :</label>
            <input disabled type="text" :value="projet.nom" />
          </div>
          <div class="form-group">
            <label for="nom">Date de création du projet :</label>
            <input disabled type="date" :value="projet.date" />
          </div>
          <div class="form-group">
            <label for="nom">Type de projet :</label>
            <input
              disabled
              type="text"
              :value="projet.leTypeDuProjet.nom_type"
            />
          </div>
          <div class="warning-delete">
            <p>
              Voulez-vous vraiment supprimer le projet
              <span>{{ projet.nom }} </span> ?
            </p>
            <p class="legend-delete">Attention : cet action est irréversible</p>
          </div>
          <div class="card-crud-btn">
            <button class="btn-cancel">
              <router-link to="/projets">
                Annuler
              </router-link>
            </button>
            <button class="btn-submit">
              Supprimer
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";

export default {
  name: "DeleteProjet",
  data() {
    return {
      imageData: "@/../static/project.jpg",
      projet: {
        id: 0,
        nom: "",
        date: "",
        leTypeDuProjet: {
          id: 0,
          nom_type: ""
        },
        image: "@/../static/project.jpg"
      },
      listeTypes: []
    };
  },
  methods: {
    submit: function() {
      let params = new FormData();
      params.append("id", this.projet.id);
      Api.maj("deleteProjet", params)
        .then(response => {
          console.log("suppression", response);
          this.$router.push("/projets");
        })
        .catch(error => console.log(error));
    },
    previewImage: function(event) {
      this.projet.image = event.target.files[0];
      let input = event.target;
      if (input.files && input.files[0]) {
        let reader = new FileReader();
        reader.onload = e => {
          this.imageData = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
    }
  },
  created() {
    this.projet.id = this.$route.params.id;
    let params = new FormData();
    params.append("id", this.projet.id);
    Api.find("getProjet", params)
      .then(response => {
        console.log("get projet : ", response);
        this.projet = response;
        this.imageData = this.projet.image;
      })
      .catch(error => console.log(error));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
