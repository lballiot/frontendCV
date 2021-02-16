<template>
  <div class="main">
    <div class="main-card-header">
      <h2>Création d'une notion :</h2>
    </div>
    <div class="main-card-body">
      <div class="card-crud">
        <form action="" @submit.prevent="submit">
          <input
            required
            type="text"
            placeholder="Nom de la notion"
            v-model="notion"
          />
          <div class="card-crud-btn">
            <button class="btn-cancel">
              <router-link to="/notions">
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
  name: "CreateNotion",
  data() {
    return {
      notion: ""
    };
  },
  methods: {
    submit: function() {
      let params = new FormData();
      params.append("nom_notion", this.notion);
      Api.maj("createNotion", params)
        .then(response => {
          console.log("response", response);
          this.$router.push("/notions");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
