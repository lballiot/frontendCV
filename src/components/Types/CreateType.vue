<template>
  <div class="main">
    <div class="main-card-header">
      <h2>Création d'un type de site :</h2>
    </div>
    <div class="main-card-body">
      <div class="card-crud">
        <form action="" @submit.prevent="submit">
          <input
            required
            type="text"
            placeholder="Nom du type de site"
            v-model="type"
          />
          <div class="card-crud-btn">
            <button class="btn-cancel">
              <router-link to="/creer-projet">
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
  name: "CreateType",
  data() {
    return {
      type: ""
    };
  },
  methods: {
    submit: function() {
      let params = new FormData();
      params.append("nom_type", this.type);
      Api.maj("createType", params)
        .then(response => {
          console.log("response", response);
          this.$router.push("/creer-projet");
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
