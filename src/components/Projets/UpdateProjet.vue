<template>
  <div class="main">
    <div class="main-card-header">
      <h2>Modification d'un projet :</h2>
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
              @change="previewImage"
            />
            <div class="invalid-feedback">Image invalide</div>
          </div>
        </div>
        <form action="" @submit.prevent="submit">
          <input type="text" placeholder="Nom du projet" v-model="projet.nom" />
          <input type="date" v-model="projet.date" />
          <select v-model="projet.leTypeDuProjet.id" placeholder="Type du site">
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

          <div class="separator"></div>
          <span
            >Vous pouvez modifier les compétences et notions attachées à ce
            projet dans les onglets prévu pour.</span
          >

          <div class="card-crud-btn">
            <button class="btn-cancel">
              <router-link to="/projets">
                Annuler
              </router-link>
            </button>
            <button class="btn-submit">
              Modifier
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
      params.append("nom", this.projet.nom);
      params.append("date", this.projet.date);
      params.append("idType", this.projet.leTypeDuProjet.id);
      params.append("image", this.projet.image);
      Api.maj("updateProjet", params)
        .then(response => {
          //   console.log("modification", response);
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
    Api.get("listeTypes")
      .then(response => {
        // console.log("liste type de site", response);
        this.listeTypes = response;
      })
      .catch(error => console.log(error));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
