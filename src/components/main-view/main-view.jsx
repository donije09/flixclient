import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import { MovieCard } from '../movie-card/movie-card';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(null);
  const [isSignup, setIsSignup] = useState(false);

  useEffect(() => {
    if (user) {
      axios.get('https://glacial-retreat-35130-2f56298b8e37.herokuapp.com/movies', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      })
      .then(response => setMovies(response.data))
      .catch(error => console.error('Error fetching movies:', error));
    }
  }, [user]);

  const handleLogin = (username, password) => {
    axios.post('https://glacial-retreat-35130-2f56298b8e37.herokuapp.com/login', { username, password })
      .then(response => {
        setUser(response.data.user);
        localStorage.setItem('token', response.data.token);
      })
      .catch(error => console.error('Login error:', error));
  };

  const handleSignup = (user) => {
    axios.post('https://glacial-retreat-35130-2f56298b8e37.herokuapp.com/users', user)
      .then(response => {
        handleLogin(user.username, user.password);
      })
      .catch(error => console.error('Signup error:', error));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  if (!user) {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col md={8}>
            {isSignup ? (
              <SignupView onSignup={handleSignup} onSwitchToLogin={() => setIsSignup(false)} />
            ) : (
              <LoginView onLogin={handleLogin} onSwitchToSignup={() => setIsSignup(true)} />
            )}
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <Button variant="primary" onClick={handleLogout}>Logout</Button>
        </Col>
      </Row>
      <Row>
        {movies.map(movie => (
          <Col key={movie._id} md={4} className="mb-4">
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
