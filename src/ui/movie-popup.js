const showPopup = (movie) => {
  const genres = movie.genres.map(genre => genre.name).join(', ');
  let trailer = '';
  if(movie.videos.results.length !== 0 && movie.videos.results[0].site === 'YouTube'){
    trailer = `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
  }
  const languageNames = new Intl.DisplayNames(['en'], {type: 'language'});
  const languageName = languageNames.of(movie.original_language);
  const html = `
        <div class="movie-details-popup">
            <div class="image">
                <img src="https://image.tmdb.org/t/p/w780${movie.poster_path}" alt="${movie.oroginal_title}">
            </div>
            <div class="details">
                <div class="headlines">
                    <h2>${movie.original_title}</h2>
                    <span class="tag-line">${movie.tagline}</span>
                    <div class="more-details">
                        <span class="rating">
                            ${movie.vote_average} <i class="fas fa-star"></i>
                        </span>
                        <span>${movie.runtime}min/${languageName}</span>
                    </div>
                    <div class="popup-genres">
                        <h4 class="genres-title">The Genres</h4>
                        <span class="genres-text">${genres}</span>
                    </div>
                    <div class="overview">
                        <h4 class="overview-title">Overview</h4>
                        <p class="overview-text">${movie.overview}</p>
                    </div>
                    <div class="buttons">
                        <a href="${movie.homepage}" class="button" target="_blank" rel="noopener noreferrer">Website</a>
                        <a href="https://imdb.com/title/${movie.imdb_id}" class="button" target="_blank" rel="noopener noreferrer">IMDB</a>
                        <a href="${trailer}" class="button" target="_blank" rel="noopener noreferrer">Trailer</a>
                    </div>

                </div>
            </div>

        </div>
    `;
    document.querySelector('body').innerHTML += html;
    setTimeout(() => {
        document.querySelector('.movie-details-popup').classList.add('active-popup');
    }, 300);

};
export default showPopup;
