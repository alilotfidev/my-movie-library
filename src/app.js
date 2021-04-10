//import base css styles
import "./css/base.css";

//movies api
import getMovies from "./api/getMovies";

//show items
import ShowGenres from "./ui/genres";
import MoviesUI from "./ui/movies";

//class instances
const movies = new getMovies();
const moviesUI = new MoviesUI();

//show genres
movies.getGenres().then((data) => {
  ShowGenres(data.genres);
});

//show movies
let page = 1;
movies.getPopulars().then((data) => {
  moviesUI.showMovies(data);
  page = data.page;
});

//navigation buttons
const nextPageButton = document.querySelector(".next-page");
const previousPageButton = document.querySelector(".previous-page");
//next page
nextPageButton.addEventListener("click", () => {
  movies.getPopulars(page + 1).then((data) => {
    moviesUI.showMovies(data);
    page = data.page;
    //show previous page button
    previousPageButton.style.visibility = "visible";
  });
});
//previous page
previousPageButton.addEventListener("click", () => {
  if (page > 1) {
    movies.getPopulars(page - 1).then((data) => {
      moviesUI.showMovies(data);
      page = data.page;
    });
  }
});
