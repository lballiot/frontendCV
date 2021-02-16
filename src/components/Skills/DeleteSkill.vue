<template>
  <div class="main">
    <div class="main-card-header">
      <h2>Suppression d'une compétence :</h2>
    </div>
    <div class="main-card-body">
      <div class="card-crud">
        <form action="" @submit.prevent="submit">
          <div class="form-group">
            <label for="nom">Nom de la compétence :</label>
            <input disabled type="text" :value="skill.nom_competence" />
          </div>
          <div class="form-group">
            <label for="nom">Icone de la compétence :</label>
            <input disabled type="text" :value="skill.icon_competence" />
          </div>
          <div
            class="previewIcon"
            v-if="skill.icon_competence && skill.icon_competence != '.'"
          >
            <p>Prévisualisation de l'icône fontawesome :</p>
            <i class="fab fa-2x" :class="skill.icon_competence"></i>
          </div>
          <div class="warning-delete">
            <p>
              Voulez-vous vraiment supprimer la compétence
              <span>{{ skill.nom_competence }} </span> ?
            </p>
            <p class="legend-delete">Attention : cet action est irréversible</p>
          </div>
          <div class="card-crud-btn">
            <button class="btn-cancel">
              <router-link to="/competences">
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
  name: "DeleteSkill",
  data() {
    return {
      skill: {
        id: 0,
        nom_competence: "",
        icon_competence: ""
      }
    };
  },
  methods: {
    submit: function() {
      let params = new FormData();
      params.append("id", this.skill.id);
      Api.maj("deleteCompetence", params)
        .then(response => {
          //   console.log("suppression", response);
          this.$router.push("/competences");
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.skill.id = this.$route.params.id;
    let params = new FormData();
    params.append("id", this.skill.id);
    Api.find("getCompetence", params)
      .then(response => {
        // console.log("response", response);
        this.skill = response;
      })
      .catch(error => console.log(error));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
