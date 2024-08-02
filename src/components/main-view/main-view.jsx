import React, { useState, useEffect } from 'react';
import axios from'axios';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';
import PropTypes from 'prop-types';


/*import inceptionPoster from '../../images/inception.jpg';
import interstellarPoster from '../../images/interstellar.jpg';
import darkKnightPoster from '../../images/dark-knight.jpg';*/

const MainView = () => {
  const [movies, setMovies] = useState([]);

  const [selectedMovie, setSelectedMovie] = useState(null);
useEffect(() => {
  const token = localStorage.getItem('token');
  axios.get(' https://glacial-retreat-35130-2f56298b8e37.herokuapp.com/movies', {
    headers: { Authorization: `Bearer ${token}`}
  })
    .then(response => {
      setMovies(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the movies!', error);
    });
}, []);

  return (
    <div>
      {selectedMovie ? (
        <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
      ) : (
        movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} onMovieClick={(newSelectedMovie) => setSelectedMovie(newSelectedMovie)} />
        ))
      )}
    </div>
  );
};
// MainView component here

MainView.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    poster: PropTypes.string,
  })),
  selectedMovie: PropTypes.object,
  setSelectedMovie: PropTypes.func,
};

export default MainView;
