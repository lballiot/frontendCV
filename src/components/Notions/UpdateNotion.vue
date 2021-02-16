<template>
  <div class="main">
    <div class="main-card-header">
      <h2>Modification d'une notion :</h2>
    </div>
    <div class="main-card-body">
      <div class="card-create">
        <form action="" @submit.prevent="submit">
          <input
            required
            type="text"
            placeholder="Nom de la notion"
            v-model="notion.nom_notion"
          />
          <div class="card-create-btn">
            <router-link to="/notions">
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
  name: "UpdateNotion",
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
      params.append("nom_notion", this.notion.nom_notion);
      Api.maj("updateNotion", params)
        .then(response => {
          console.log("modification", response);
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
