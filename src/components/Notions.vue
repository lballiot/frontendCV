<template>
  <div class="main">
    <div class="main-card-header">
      <h2>Liste des notions maîtrisées :</h2>
      <span title="Créer une nouvelle notion">
        <router-link to="/creer-notion">
          <i class="fa fa-plus fa-2x"></i>
        </router-link>
      </span>
    </div>
    <div class="main-card-body">
      <div class="main-card-body-table">
        <b-table hover :items="listeNotions" :fields="cols" class="card-table">
          <!-- Template icon -->
          <template v-slot:cell(icon)="data">
            <i :class="data.item.icon"></i>
          </template>

          <!-- Template projets -->
          <template v-slot:cell(lesProjets)="data">
            <span v-for="projet in data.item.lesProjets" :key="projet.id">
              {{ projet.nom }},
            </span>
          </template>

          <!-- Template actions -->
          <template v-slot:cell(actions)="data">
            <span title="Modifier la notion">
              <router-link
                :to="{
                  name: 'UpdateNotion',
                  params: { id: data.item.id }
                }"
              >
                <i class="fas fa-edit"></i>
              </router-link>
            </span>
            <span title="Supprimer la notion">
              <router-link
                :to="{
                  name: 'DeleteNotion',
                  params: { id: data.item.id }
                }"
              >
                <i class="fas fa-trash-alt"></i>
              </router-link>
            </span>
          </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";

export default {
  name: "Notions",
  data() {
    return {
      cols: [
        { key: "nom_notion", sortable: true, label: "Nom" },
        { key: "lesProjets", sortable: true, label: "Projets" },
        { key: "actions", sortable: false, label: "Actions" }
      ],
      listeNotions: []
    };
  },
  created() {
    Api.get("listeNotions").then(response => {
      this.listeNotions = response;
      //   console.log("liste notions", this.listeNotions);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
