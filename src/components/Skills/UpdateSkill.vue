<template>
  <div class="main">
    <div class="main-card-header">
      <h2>Modification d'une compétence :</h2>
    </div>
    <div class="main-card-body">
      <div class="card-create">
        <form action="" @submit.prevent="submit">
          <input
            required
            type="text"
            placeholder="Nom de la compétence"
            v-model="skill.nom_competence"
          />
          <p class="legend">
            Vous devez mettre la classe d'une icône fontawesome, si celle ci
            n'existe pas mettre un point
          </p>
          <input
            required
            type="text"
            placeholder="Icône de la compétence"
            v-model="skill.icon_competence"
          />
          <div
            class="previewIcon"
            v-if="skill.icon_competence && skill.icon_competence != '.'"
          >
            <p>Prévisualisation de l'icône fontawesome :</p>
            <i class="fab fa-2x" :class="skill.icon_competence"></i>
          </div>

          <div class="card-create-btn">
            <router-link to="/competences">
              <button class="btn-cancel">
                Annuler
              </button>
            </router-link>
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

export default {
  name: "UpdateSkill",
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
      params.append("nom_competence", this.skill.nom_competence);
      params.append("icon_competence", this.skill.icon_competence);
      Api.maj("updateCompetence", params)
        .then(response => {
          console.log("response modification");
          console.log(response);
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
        console.log("response", response);
        this.skill = response;
      })
      .catch(error => console.log(error));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
