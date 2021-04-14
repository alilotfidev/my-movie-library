class getMovies{
    constructor(){
        this.apiKey = 'd2b87aa081ba529921b267d0c52cd311';
        this.baseUrl = 'https://api.themoviedb.org/3/';
    }
    async getPopulars(page = 1){
        const query = `movie/popular?api_key=${this.apiKey}&page=${page}`;
        const response = await fetch(this.baseUrl + query);
        const result = await response.json();
        return result;
    }
    async searchMovies(page = 1, search){
        const query = `search/movie?api_key=${this.apiKey}&query=${search}&page=${page}&include_adult=false`;
        const response = await fetch(this.baseUrl + query);
        const result = await response.json();
        return result;
    }
    async getMovieDetails(id){
        const query = `movie/${id}?api_key=${this.apiKey}`;
        const response = await fetch(this.baseUrl + query);
        const result = await response.json();
        return result;
    }
    async getGenreMovies(genre, page = 1){
        console.log(page);
        const query = `discover/movie?api_key=${this.apiKey}&with_genres=${genre}&sort_by=popularity.desc&page=${page}`;
        const response = await fetch(this.baseUrl + query);
        const result = await response.json();
        return result;
    }
    async getGenres(){
        const query = `/genre/movie/list?api_key=${this.apiKey}`;
        const response = await fetch(this.baseUrl + query);
        const result = await response.json();
        return result;
    }
}
export default getMovies;