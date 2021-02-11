// Serveur fournisseur de données
const host = "http://localhost/projet_bloc2/backEnd/";

export default {
  // les différentes adresses des programmes
  listeProjets: host + "listeProjets.php",

  listeCompetences: host + "listeCompetences.php",

  listeNotions: host + "listeNotions.php",

  listeTypes: host + "listeTypes.php"
};
