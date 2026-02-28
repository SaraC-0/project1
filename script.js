//Recupero l'elemento lista dal dom html
const lista = document.getElementById("lista");
let film = [];

//Carico il file json
fetch("dati.json")
  .then(function (response) {
    //Trasformo il contenuto in un array js
    return response.json();
  })
  .then(function (data) {
    film = data;
    mostraLista();
  })
  .catch(function (error) {
    alert("Errore nel caricamento del file");
  });

//Dichiaro la funzione che creerà la lista di <li> dentro <ol> in html
function mostraLista() {
  lista.innerHTML = "";

  for (let i = 0; i < film.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = film[i].titolo + " " + film[i].regista;
    li.addEventListener("click", function () {
      apriDettaglio(film[i]); //Chiamo la funzione apriDettaglio passandole l'oggetto corrente come parametro
    });
    //Aggiungo l'elemento appena creato alla lista html
    lista.appendChild(li);
  }
}

function apriDettaglio(filmAttuale) {
  let dettaglio = document.getElementById("dettaglio");
  dettaglio.innerHTML = ""; //svuoto il div 'dettaglio' per evitare di aggiungere testi all'infinito.
  let info = document.createElement("p");
  info.innerHTML =
    "<b>" +
    filmAttuale.regista +
    "</b>" +
    "<br>" +
    filmAttuale.categoria +
    "<br>" +
    filmAttuale.descrizione;

  dettaglio.appendChild(info);
  dettaglio.style.display = "block";
}
