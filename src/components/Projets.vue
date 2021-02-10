<template>
  <div class="main">
    <div class="main-card-header">
      <h2>Liste des projets :</h2>
      <router-link to="/create-project">
        <i class="fa fa-plus fa-2x"></i>
      </router-link>
    </div>
    <div class="main-card-body">
      <div class="box-project" v-for="projet in listeProject" :key="projet.id">
        <div class="box-project-change">
          <router-link to="#">
            <i class="fas fa-edit"></i>
          </router-link>
          <router-link to="#">
            <i class="fas fa-trash-alt"></i>
          </router-link>
        </div>
        <img :src="projet.img" :alt="projet.nom" />
        <div class="box-project-details">
          <h4>{{ projet.nom }}</h4>
          <div class="separator"></div>
          <p class="box-project-date">
            Date de réalisation : <span>{{ projet.date }}</span>
          </p>
          <p class="box-project-type">Type de site : {{ projet.type }}</p>
          <p class="box-project-competences">
            Compétences utilisées : bla bla bla
          </p>
          <p class="box-project-notions">Notions traitées : bla bla bla</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projets",
  data() {
    return {
      listeProject: [
        {
          id: 1,
          nom: "Portfolio",
          date: "12/2020",
          img:
            "http://localhost/projet_bloc2/frontEnd/src/assets/img/Portfolio.png",
          type: "Portfolio"
        },
        {
          id: 2,
          nom: "Site web",
          date: "12/2020",
          img: "./assets/img/Siteweb.png",
          type: "Site web"
        },
        {
          id: 3,
          nom: "ToDo list",
          date: "12/2020",
          img: "./assets/img/ToDo.png",
          type: "ToDo list"
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
