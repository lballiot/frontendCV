<template>
  <div class="main">
    <div class="main-card-header">
      <h2>Création d'une compétence :</h2>
    </div>
    <div class="main-card-body">
      <div class="card-create">
        <form action="" @submit.prevent="submit">
          <input
            required
            type="text"
            placeholder="Nom de la compétence"
            v-model="skill"
          />
          <p class="legend">
            Vous devez mettre la classe d'une icône fontawesome, si celle ci
            n'existe pas mettre un point
          </p>
          <input
            required
            type="text"
            placeholder="Icône de la compétence"
            v-model="iconSkill"
          />
          <div class="previewIcon" v-if="iconSkill && iconSkill != '.'">
            <p>Prévisualisation de l'icône fontawesome :</p>
            <i class="fab fa-2x" :class="iconSkill"></i>
          </div>

          <div class="card-create-btn">
            <button class="btn-cancel">
              <router-link to="/competences">
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

export default {
  name: "CreateSkill",
  data() {
    return {
      skill: "",
      iconSkill: ""
    };
  },
  methods: {
    submit: function() {
      let params = new FormData();
      params.append("nom_competence", this.skill);
      params.append("icon_competence", this.iconSkill);
      Api.maj("createCompetence", params)
        .then(response => {
          console.log("respose", response);
          this.$router.push("/competences");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
