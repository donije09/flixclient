import React from 'react';

const MovieCard = ({ movie, onMovieClick }) => {
  return (
    <div onClick={() => onMovieClick(movie)}>
      <h2>{movie.title}</h2>
    </div>
  );
};

export default MovieCard;
