// Serveur fournisseur de données
const host = "http://localhost/projet_bloc2/backEnd/";

export default {
  // les différentes adresses des programmes
  listeProjets: host + "listeProjets.php",
  getProjet: host + "get/" + "getProjet.php",
  createProjet: host + "crud/" + "createProjet.php",
  updateProjet: host + "crud/" + "updateProjet.php",
  deleteProjet: host + "crud/" + "deleteProjet.php",

  listeCompetences: host + "listeCompetences.php",
  getCompetence: host + "get/" + "getCompetence.php",
  createCompetence: host + "crud/" + "createCompetence.php",
  updateCompetence: host + "crud/" + "updateCompetence.php",
  deleteCompetence: host + "crud/" + "deleteCompetence.php",
  manageCompetence: host + "manage/" + "manageCompetence.php",

  listeNotions: host + "listeNotions.php",
  getNotion: host + "get/" + "getNotion.php",
  createNotion: host + "crud/" + "createNotion.php",
  updateNotion: host + "crud/" + "updateNotion.php",
  deleteNotion: host + "crud/" + "deleteNotion.php",
  manageNotion: host + "manage/" + "manageNotion.php",

  listeTypes: host + "listeTypes.php",
  createType: host + "crud/" + "createType.php"
};
