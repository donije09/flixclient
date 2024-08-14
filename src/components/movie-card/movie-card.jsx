import React from 'react';
<<<<<<< HEAD
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const MovieCard = ({ movie, onFavorite, onRemoveFavorite, isFavorite }) => (
  <Card>
    <Card.Img variant="top" src={movie.imagePath} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>{movie.description}</Card.Text>
      <Link to={`/movies/${movie._id}`}>
        <Button variant="primary">Open</Button>
      </Link>
      {isFavorite ? (
        <Button variant="danger" onClick={() => onRemoveFavorite(movie._id)}>
          Remove from Favorites
        </Button>
      ) : (
        <Button variant="success" onClick={() => onFavorite(movie._id)}>
          Add to Favorites
        </Button>
      )}
    </Card.Body>
  </Card>
);
=======
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export const MovieCard = ({ movie }) => {
  return (
    <Card>
      <Card.Img variant="top" src={movie.imageURL} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageURL: PropTypes.string.isRequired,
    genre: PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired,
    director: PropTypes.shape({
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired
    }).isRequired,
  }).isRequired
};
>>>>>>> 8d4870a4bc2a956558a7b4a9889d194a65dd53a9
