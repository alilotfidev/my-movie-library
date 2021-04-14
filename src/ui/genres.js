import "../css/genres.css";
class GenresUI {
  constructor() {
    this.genresList = document.querySelector(".genres-container");
  }
  showGenres(genres) {
    genres.forEach((genre) => {
      const html = `
              <span class="genre" data-id="${genre.id}"> <i class="fas fa-angle-right genre-icon"></i> ${genre.name}</span>
          `;
      this.genresList.innerHTML += html;
    });
  }
  addClickEvent(callBack) {
    this.genresList.addEventListener('click' , e => {
      if (e.target.tagName === 'SPAN') {
        callBack(e);
        this.genresList.querySelectorAll('span').forEach(genre => {
          if (genre.classList.contains('active')) {
            genre.classList.remove('active')
          }
        });
        e.target.classList.add('active');
      }
    })
  }
}

export default GenresUI;
