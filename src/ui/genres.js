const ShowGenres = (genres) => {
    const genresList = document.querySelector('.genres');
    genres.forEach(genre => {
        const html = `
            <span class="genre" data-id="${genre.id}">${genre.name}</span>
        `;
        genresList.innerHTML += html;
    });
}
export default ShowGenres;