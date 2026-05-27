
function FavoriteFacts(fact) {



}
// spara facten
const chosenFact = JSON.stringify(fact);
localStorage.setItem("favorited-fact", chosenFact);

//hämta tillbaka factsen

const facts = [];
const JsonFacts = JSON.parse(localStorage.getItem("favorited-fact"));
