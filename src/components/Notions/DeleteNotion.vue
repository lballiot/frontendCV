<template>
  <div class="main">
    <div class="main-card-header">
      <h2>Suppression d'une notion :</h2>
    </div>
    <div class="main-card-body">
      <div class="card-crud">
        <form action="" @submit.prevent="submit">
          <div class="form-group">
            <label for="nom">Nom de la notion :</label>
            <input disabled type="text" :value="notion.nom_notion" />
          </div>
          <div class="warning-delete">
            <p>
              Voulez-vous vraiment supprimer la notion
              <span>{{ notion.nom_notion }} </span> ?
            </p>
            <p class="legend-delete">Attention : cet action est irréversible</p>
          </div>
          <div class="card-crud-btn">
            <button class="btn-cancel">
              <router-link to="/notions">
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
  name: "DeleteNotion",
  data() {
    return {
      notion: {
        id: 0,
        nom_notion: ""
      }
    };
  },
  methods: {
    submit: function() {
      let params = new FormData();
      params.append("id", this.notion.id);
      Api.maj("deleteNotion", params)
        .then(response => {
          console.log("suppression", response);
          this.$router.push("/notions");
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.notion.id = this.$route.params.id;
    let params = new FormData();
    params.append("id", this.notion.id);
    Api.find("getNotion", params)
      .then(response => {
        console.log("response", response);
        this.notion = response;
      })
      .catch(error => console.log(error));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
