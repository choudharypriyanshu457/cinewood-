const movies = [
  {
    title: "Interstellar",
    year: "2014",
    genre: "Sci-Fi",
    rating: "8.7"
  },
  {
    title: "Inception",
    year: "2010",
    genre: "Sci-Fi",
    rating: "8.8"
  },
  {
    title: "The Dark Knight",
    year: "2008",
    genre: "Action",
    rating: "9.0"
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    year: "2018",
    genre: "Animation",
    rating: "8.4"
  },
  {
    title: "The Grand Budapest Hotel",
    year: "2014",
    genre: "Comedy",
    rating: "8.1"
  },
  {
    title: "Dune",
    year: "2021",
    genre: "Sci-Fi",
    rating: "8.0"
  },
  {
    title: "Parasite",
    year: "2019",
    genre: "Drama",
    rating: "8.5"
  },
  {
    title: "Mad Max: Fury Road",
    year: "2015",
    genre: "Action",
    rating: "8.1"
  }
];

const grid = document.getElementById("movieGrid");
const search = document.getElementById("search");
const count = document.getElementById("count");


// MOVIE DISPLAY

function renderMovies(list) {

  grid.innerHTML = "";

  list.forEach(movie => {

    const card = document.createElement("article");

    card.className = "card";

    card.innerHTML = `
      <div class="poster">
        🎬
      </div>

      <div class="info">

        <h3>${movie.title}</h3>

        <div class="meta">
          ${movie.year} • ${movie.genre}
        </div>

        <div class="rating">
          ★ ${movie.rating}
        </div>

      </div>
    `;

    grid.appendChild(card);

  });

  count.textContent = `${list.length} movies`;
}


// SEARCH

search.addEventListener("input", () => {

  const searchText =
    search.value.toLowerCase().trim();

  const filteredMovies =
    movies.filter(movie =>
      movie.title
        .toLowerCase()
        .includes(searchText)
    );

  renderMovies(filteredMovies);

});


// MOBILE MENU

const menuBtn =
  document.getElementById("menuBtn");

const nav =
  document.querySelector("nav");

menuBtn.addEventListener("click", () => {

  if (nav.style.display === "flex") {

    nav.style.display = "none";

  } else {

    nav.style.display = "flex";
    nav.style.flexDirection = "column";
    nav.style.position = "absolute";
    nav.style.right = "6%";
    nav.style.top = "65px";
    nav.style.background = "#111";
    nav.style.padding = "15px";
    nav.style.borderRadius = "8px";

  }

});


// SHOW MOVIES

renderMovies(movies);