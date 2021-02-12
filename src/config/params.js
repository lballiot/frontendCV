// Serveur fournisseur de données
const host = "http://localhost/projet_bloc2/backEnd/";

export default {
  // les différentes adresses des programmes
  listeProjets: host + "listeProjets.php",
  createProjet: host + "crud/" + "createProjet.php",

  listeCompetences: host + "listeCompetences.php",
  createCompetence: host + "crud/" + "createCompetence.php",

  listeNotions: host + "listeNotions.php",
  createNotion: host + "crud/" + "createNotion.php",

  listeTypes: host + "listeTypes.php"
};
