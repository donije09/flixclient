import React, { useState } from 'react';
import MovieCard from '../movie-card/movie-card';
import MovieView from '../movie-view/movie-view';


import inceptionPoster from '../../images/inception.jpg';
import interstellarPoster from '../../images/interstellar.jpg';
import darkKnightPoster from '../../images/dark-knight.jpg';

const MainView = () => {
  const [movies] = useState([
    { id: 1, title: 'Inception', description: 'A mind-bending thriller', genre: 'Sci-Fi', director: 'Christopher Nolan', poster: inceptionPoster },
    { id: 2, title: 'Interstellar', description: 'A journey through space', genre: 'Sci-Fi', director: 'Christopher Nolan', poster: interstellarPoster },
    { id: 3, title: 'The Dark Knight', description: 'A Batman tale', genre: 'Action', director: 'Christopher Nolan', poster: darkKnightPoster },
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

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

export default MainView;
