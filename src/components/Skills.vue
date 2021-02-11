<template>
  <div class="main">
    <div class="main-card-header">
      <h2>Liste des compétences maîtrisées :</h2>
      <span title="Créer une nouvelle compétence">
        <router-link to="/create-skill">
          <i class="fa fa-plus fa-2x"></i>
        </router-link>
      </span>
    </div>
    <div class="main-card-body">
      <div class="main-card-body-table">
        <b-table
          striped
          hover
          :items="listeSkills"
          :fields="cols"
          class="card-table"
        >
          <template v-slot:cell(icon)="data">
            <i :class="data.item.icon"></i>
          </template>
          <template v-slot:cell(actions)="data">
            <span title="Modifier la compétence">
              <router-link
                :to="{
                  name: 'EditSkill',
                  params: { id: data.item.id }
                }"
              >
                <i class="fas fa-edit"></i>
              </router-link>
            </span>
            <span title="Supprimer la compétence">
              <router-link to="#">
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
export default {
  name: "Skills",
  data() {
    return {
      cols: [
        { key: "nom", sortable: true, label: "Nom" },
        { key: "icon", sortable: false, label: "Icône" },
        { key: "actions", sortable: false, label: "Actions" }
      ],
      listeSkills: [
        { id: 1, nom: "HTML", icon: "fab fa-html5 fa-2x" },
        { id: 2, nom: "CSS", icon: "fab fa-css3-alt fa-2x" },
        { id: 3, nom: "Javascript", icon: "fab fa-js fa-2x" },
        { id: 4, nom: "VueJS", icon: "fab fa-vuejs fa-2x" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
