//import base css styles
import "./css/base.css";

//movies api
import getMovies from "./api/getMovies";

//show items
import GenresUI from "./ui/genres";
import MoviesUI from "./ui/movies";
import showPopup from './ui/movie-popup';

//class instances
const movies = new getMovies();
const moviesUI = new MoviesUI();
const genresUI = new GenresUI();

//elements
const searchForm = document.querySelector(".search");
const loader = document.querySelector(".loader");
const moviesContainer = document.querySelector('.movies-container');
//navigation buttons
const nextPageButton = document.querySelector(".next-page");
const previousPageButton = document.querySelector(".previous-page");

//show genres
movies.getGenres().then((data) => {
  genresUI.showGenres(data.genres);
  genresUI.addClickEvent(changeGenre);
});
//show movies
let page = 1;
//current genre
let currentGenre = "popular";
movies.getPopulars().then((data) => {
  loader.style.visibility = "hidden";
  if (nextPageButton.style.visibility === "hidden") {
    nextPageButton.style.visibility === "visible";
  }
  moviesUI.showMovies(data);
  page = data.page;
});

//next page
nextPageButton.addEventListener("click", () => {
  if (currentGenre === "popular") {
    movies.getPopulars(page + 1).then((data) => {
      moviesUI.showMovies(data);
      page = data.page;
      //show previous page button
      previousPageButton.style.visibility = "visible";
    });
  } else {
    movies.getGenreMovies(currentGenre, page + 1).then((data) => {
      moviesUI.showMovies(data);
      page = data.page;
      //show previous page button
      previousPageButton.style.visibility = "visible";
    });
  }
});
//previous page
previousPageButton.addEventListener("click", () => {
  if (page > 1) {
    if (currentGenre === "popular") {
      movies.getPopulars(page - 1).then((data) => {
        moviesUI.showMovies(data);
        page = data.page;
      });
    } else {
      movies.getGenreMovies(currentGenre, page - 1).then((data) => {
        moviesUI.showMovies(data);
        page = data.page;
      });
    }
  }
});

//changing genres
const changeGenre = (e) => {
  if (e.target.getAttribute("data-id") != null) {
    const selectedGenre = e.target;
    document.querySelector("header h2").innerText = selectedGenre.innerText;
    const selectedGenreID = e.target.getAttribute("data-id");
    movies.getGenreMovies(selectedGenreID).then((data) => {
      if (nextPageButton.style.visibility === "hidden") {
        nextPageButton.style.visibility === "visible";
      }
      moviesUI.showMovies(data);
      currentGenre = selectedGenreID;
    });
  } else {
    movies.getPopulars().then((data) => {
      moviesUI.showMovies(data);
      page = data.page;
      currentGenre = "popular";
      document.querySelector("header h2").innerText = "Popular movies";
    });
  }
  page = 1;
};

//search movies
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.movie.value !== "") {
    document.querySelector(".movies-container").innerHTML = "";

    movies.searchMovies(1, e.target.movie.value.trim()).then((data) => {
      moviesUI.showMovies(data);
      page = data.page;
      nextPageButton.style.visibility = "hidden";
    });
  }
});


//show movie details popup
moviesContainer.addEventListener('click', e => {
  if(e.target.closest('.movie-card')){
    const id = e.target.closest('.movie-card').getAttribute('data-id');
    movies.getMovieDetails(id).then((data) => {
      showPopup(data);
    });
  }
})