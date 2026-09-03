const movies = [
  {
    title: "Interstellar",
    year: "2014",
    genre: "Sci-Fi",
    rating: "8.7",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    trailer: "https://www.youtube.com/results?search_query=Interstellar+official+trailer"
  },
  {
    title: "Inception",
    year: "2010",
    genre: "Sci-Fi",
    rating: "8.8",
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    trailer: "https://www.youtube.com/results?search_query=Inception+official+trailer"
  },
  {
    title: "The Dark Knight",
    year: "2008",
    genre: "Action",
    rating: "9.0",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    trailer: "https://www.youtube.com/results?search_query=The+Dark+Knight+official+trailer"
  },
  {
    title: "Dune",
    year: "2021",
    genre: "Sci-Fi",
    rating: "8.0",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    trailer: "https://www.youtube.com/results?search_query=Dune+2021+official+trailer"
  },
  {
    title: "Parasite",
    year: "2019",
    genre: "Drama",
    rating: "8.5",
    poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    trailer: "https://www.youtube.com/results?search_query=Parasite+2019+official+trailer"
  },
  {
    title: "Mad Max: Fury Road",
    year: "2015",
    genre: "Action",
    rating: "8.1",
    poster: "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    trailer: "https://www.youtube.com/results?search_query=Mad+Max+Fury+Road+official+trailer"
  }
];

const grid = document.getElementById("movieGrid");
const search = document.getElementById("search");
const count = document.getElementById("count");

function renderMovies(list) {

  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = `
      <p style="color:#aaa;">
        No movies found 😔
      </p>
    `;

    count.textContent = "0 movies";
    return;
  }

  list.forEach(movie => {

    const card = document.createElement("article");

    card.className = "card";

    card.innerHTML = `
      <img
        src="${movie.poster}"
        alt="${movie.title}"
        style="
          width:100%;
          height:240px;
          object-fit:cover;
          display:block;
        "
      >

      <div class="info">

        <h3>${movie.title}</h3>

        <div class="meta">
          ${movie.year} • ${movie.genre}
        </div>

        <div class="rating">
          ★ ${movie.rating}
        </div>

        <a
          href="${movie.trailer}"
          target="_blank"
          rel="noopener noreferrer"
          style="
            display:block;
            margin-top:12px;
            background:#e50914;
            color:white;
            text-align:center;
            padding:9px;
            border-radius:6px;
            text-decoration:none;
            font-weight:bold;
          "
        >
          ▶ Watch Trailer
        </a>

      </div>
    `;

    grid.appendChild(card);

  });

  count.textContent = `${list.length} movies`;
}


// SEARCH

search.addEventListener("input", () => {

  const text = search.value
    .toLowerCase()
    .trim();

  const results = movies.filter(movie =>
    movie.title
      .toLowerCase()
      .includes(text)
  );

  renderMovies(results);

});


// MOBILE MENU

const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

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


// START

renderMovies(movies);