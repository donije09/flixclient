import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div onClick={() => onMovieClick(movie)}>
      <h2>{movie.title}</h2>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    poster: PropTypes.string,
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired,
};

export default MovieCard;
