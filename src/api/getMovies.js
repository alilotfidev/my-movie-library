class getMovies{
    constructor(){
        this.apiKey = 'd2b87aa081ba529921b267d0c52cd311';
        this.baseUrl = 'https://api.themoviedb.org/3/';
    }
    async getPopulars(){
        const query = `movie/popular?api_key=${this.apiKey}`;
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
    async getGenres(){
        const query = `/genre/movie/list?api_key=${this.apiKey}`;
        const response = await fetch(this.baseUrl + query);
        const result = await response.json();
        return result;
    }
}
export default getMovies;