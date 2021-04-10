import "../css/genres.css";
const ShowGenres = (genres) => {
  const genresList = document.querySelector(".genres-container");

  genres.forEach((genre) => {
    const html = `
            <span class="genre" data-id="${genre.id}"> <i class="fas fa-angle-right genre-icon"></i> ${genre.name}</span>
        `;
    genresList.innerHTML += html;
  });
};
export default ShowGenres;
