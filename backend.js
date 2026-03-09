// Array dei film
let movies = ["Inception", "The Matrix", "Interstellar"];

// Recupero elementi dal DOM
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const openBtn1 = document.getElementById("openModal1");
const closeBtn = document.getElementById("closeModal");

const form = document.getElementById("movieForm");

const movieList = document.getElementById("movie-list");
const list1 = document.getElementById("lista-film");

// APRI MODALE
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// CHIUDI MODALE
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// MOSTRA LISTA FILM
openBtn1.addEventListener("click", () => {
  list1.innerHTML = "";

  movies.forEach((movie) => {
    const li = document.createElement("li");

    li.textContent = movie;

    list1.appendChild(li);
  });
});

// AGGIUNGI FILM
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const titolo = document.getElementById("title").value;
  const regista = document.getElementById("director").value;
  const categoria = document.getElementById("category").value;

  // SALVO IL FILM NELL'ARRAY
  movies.push(titolo);

  // CREO CARD
  const card = document.createElement("div");

  card.classList.add("movie-card");

  card.innerHTML = `
  <h3>${titolo}</h3>
  <p>Regista: ${regista}</p>
  <p>Categoria: ${categoria}</p>
  `;

  movieList.appendChild(card);

  form.reset();

  modal.style.display = "none";
});
