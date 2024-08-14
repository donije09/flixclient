import React from 'react';
import PropTypes from 'prop-types';
const MovieView = ({ movie, onBackClick }) => {
  return (
    <div>
      <img src={movie.poster} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <p>Genre: {movie.genre}</p>
      <p>Director: {movie.director}</p>
      <button onClick={onBackClick}>Back</button>
    </div>
  );
};
MovieView.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    poster: PropTypes.string,
  }).isRequired,
  onBackClick: PropTypes.func.isRequired,
};
export default MovieView;