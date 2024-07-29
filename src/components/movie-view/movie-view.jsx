import React from 'react';

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

export default MovieView;