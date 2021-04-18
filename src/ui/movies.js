import "../css/movies.css";

class MoviesUI {
  constructor() {}
  showMovies(movies) {
    const data = movies.results;
    const moviesContainer = document.querySelector(".movies-container");
    moviesContainer.innerHTML = "";
    data.forEach((movie) => {
      if (!movie.adult) {
        const html = `
        <div class="movie-card" data-id="${movie.id}">
                    <img src="https://image.tmdb.org/t/p/w342/${movie.poster_path}" alt="">
                    <p>${movie.original_title}</p>
                    <div class="details">
                        ${movie.vote_average} <i class="fas fa-star"></i>
                    </div>
        </div>
    `;
        moviesContainer.innerHTML += html;
        window.scrollTo(0, 0);
      }
    });
  }
  //   let page = movies.page;
}
export default MoviesUI;
