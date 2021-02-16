// Serveur fournisseur de données
const host = "http://localhost/projet_bloc2/backEnd/";

export default {
  // les différentes adresses des programmes
  listeProjets: host + "listeProjets.php",
  getProjet: host + "get/" + "getProjet.php",
  createProjet: host + "crud/" + "createProjet.php",
  updateProjet: host + "crud/" + "updateProjet.php",

  listeCompetences: host + "listeCompetences.php",
  getCompetence: host + "get/" + "getCompetence.php",
  createCompetence: host + "crud/" + "createCompetence.php",
  updateCompetence: host + "crud/" + "updateCompetence.php",

  listeNotions: host + "listeNotions.php",
  getNotion: host + "get/" + "getNotion.php",
  createNotion: host + "crud/" + "createNotion.php",
  updateNotion: host + "crud/" + "updateNotion.php",

  listeTypes: host + "listeTypes.php"
};
