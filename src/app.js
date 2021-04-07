//import base css styles
import './css/base.css';

//movies api
import getMovies from './api/getMovies';

//show items
import ShowGenres from './ui/genres';

//class instances
const movies = new getMovies();


//show genres
movies.getGenres().then(data => {
    ShowGenres(data.genres);
})
