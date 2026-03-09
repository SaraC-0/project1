const movies: string[] = ["Inception", "The Matrix", "Interstellar"];
const list = document.getElementById("movie-list");

movies.forEach((movie) => {
  const li = document.createElement("li");
  li.textContent = movie;
  list?.appendChild(li);
});
