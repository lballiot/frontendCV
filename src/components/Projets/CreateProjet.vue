<template>
  <div class="main">
    <div class="main-card-header">
      <h2>Création d'un projet :</h2>
    </div>
    <div class="main-card-body">
      <div class="card-crud card-projet">
        <div class="previewImage-projet">
          <img :src="imageData" alt="project" />
          <div class="custom-file">
            <label class="label-img" for="validatedCustomFile"
              >Selectionnez une image...</label
            >
            <input
              type="file"
              id="validatedCustomFile"
              required
              @change="previewImage"
            />
            <div class="invalid-feedback">Image invalide</div>
          </div>
        </div>
        <form action="" @submit.prevent="submit">
          <input
            required
            type="text"
            placeholder="Nom du projet"
            v-model="projet.nom"
          />
          <input required type="date" v-model="projet.date" />
          <div class="form-group-type-create">
            <select v-model="projet.type" placeholder="Type du site" required>
              <option value="0" disabled selected>
                Selectionner un type de site
              </option>

              <option
                v-for="type in listeTypes"
                :key="type.id"
                :value="type.id"
                >{{ type.nom_type }}</option
              >
            </select>
            <span title="Créer un nouveau type de site">
              <router-link to="/creer-type">
                <i class="fa fa-plus fa-2x"></i>
              </router-link>
            </span>
          </div>

          <!-- Add competence button to add -->
          <div class="liste-competence">
            <label>Compétences :</label>
            <btn
              v-for="comp in listeCompetences"
              :key="comp.id"
              :id="comp.id"
              :title="comp.nom_competence"
              :tabCompetence="selectedCompetences"
            >
            </btn>
          </div>
          <div class="liste-competence">
            <label>Notions :</label>
            <btn
              v-for="notion in listeNotions"
              :key="notion.id"
              :id="notion.id"
              :title="notion.nom_notion"
              :tabCompetence="selectedNotions"
            >
            </btn>
          </div>
          <div class="card-crud-btn">
            <button class="btn-cancel">
              <router-link to="/projets">
                Annuler
              </router-link>
            </button>
            <button class="btn-submit">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";
import btn from "./btn";

export default {
  name: "CreateProjet",
  components: {
    btn
  },
  data() {
    return {
      imageData: "@/../static/project.jpg",
      projet: {
        nom: "",
        date: "",
        type: 0,
        image: "@/../static/project.jpg"
      },
      listeTypes: [],
      listeCompetences: [],
      listeNotions: [],
      selectedCompetences: [],
      selectedNotions: []
    };
  },
  methods: {
    submit: function() {
      let params = new FormData();
      params.append("nom", this.projet.nom);
      params.append("date", this.projet.date);
      params.append("image", this.projet.image);
      params.append("idType", this.projet.type);
      params.append("idCompetences", this.selectedCompetences);
      params.append("idNotions", this.selectedNotions);

      Api.maj("createProjet", params)
        .then(response => {
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
    Api.get("listeTypes")
      .then(response => {
        this.listeTypes = response;
      })
      .catch(error => console.log(error));
    Api.get("listeCompetences")
      .then(response => {
        this.listeCompetences = response;
      })
      .catch(error => console.log(error));
    Api.get("listeNotions")
      .then(response => {
        this.listeNotions = response;
      })
      .catch(error => console.log(error));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
