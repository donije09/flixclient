import React, { useState } from 'react';
import { Button, Form, Card, Row, Col } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';

export const ProfileView = ({ user, movies, onUpdateUser, onDeregister, onFavorite }) => {
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [birthday, setBirthday] = useState(user.Birthday);

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdateUser({ username, email, password, birthday });
  };

  const favoriteMovies = movies.filter(m => user.FavoriteMovies.includes(m._id));

  return (
    <div>
      <h2>Profile</h2>
      <Form onSubmit={handleUpdate}>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBirthday">
          <Form.Label>Birthday</Form.Label>
          <Form.Control
            type="date"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Update</Button>
        <Button variant="danger" onClick={onDeregister}>Deregister</Button>
      </Form>
      <h3>Favorite Movies</h3>
      <Row>
        {favoriteMovies.map((movie) => (
          <Col md={4} key={movie._id}>
            <MovieCard movie={movie} onFavorite={onFavorite} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
