import React from 'react';
<<<<<<< HEAD
import { Card, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';

export const MovieView = ({ movies }) => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const movie = movies.find(m => m._id === movieId);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <Card>
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
          <Button variant="primary" onClick={() => navigate(-1)}>Back</Button>
        </Card.Body>
      </Card>
    </div>
  );
};
=======
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
>>>>>>> 8d4870a4bc2a956558a7b4a9889d194a65dd53a9
