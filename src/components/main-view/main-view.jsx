import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { MovieCard } from '../movie-card/movie-card';
import {MovieView} from '../movie-view/movie-view';
import { LoginView } from '../login-view/login-view';
import { SignupView } from '../signup-view/signup-view';
import { ProfileView } from '../profile-view/profile-view';
import { NavigationBar } from '../navigation-bar/navigation-bar';

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(null);

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
    axios.post('https://glacial-retreat-35130-2f56298b8e37.herokuapp.com/login', {
      username,
      password
    })
    .then(response => {
      if (response.data.user) {
        // Store user data and token in localStorage
        setUser(response.data.user);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('token', response.data.token);
      } else {
        alert('Login failed. No user data returned.');
      }
    })
    .catch(error => {
      console.error('Login error:', error);
      alert('Login failed. Please check your username and password.');
    });
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
    localStorage.removeItem('user');
  };

  const handleFavorite = (movieId) => {
    const isFavorite = user.favoriteMovies?.includes(movieId);
    const method = isFavorite ? 'delete' : 'post';
    const url = `https://glacial-retreat-35130-2f56298b8e37.herokuapp.com/users/${user.username}/movies/${movieId}`;

    axios({
      method,
      url,
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
    .then(response => {
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
    })
    .catch(error => console.error('Error updating favorite movies:', error));
  };

  return (
    <Router>
      <NavigationBar user={user} onLoggedOut={handleLogout} />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Row>
                  {movies.map(movie => (
                    <Col key={movie._id} md={4} className="mb-4">
                      <MovieCard
                        movie={movie}
                        onFavorite={handleFavorite}
                        onRemoveFavorite={handleFavorite} // Use the same function for both add and remove
                        isFavorite={user.favoriteMovies?.includes(movie._id)}
                      />
                    </Col>
                  ))}
                </Row>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login"
            element={<LoginView onLogin={handleLogin} />}
          />
          <Route
            path="/register"
            element={<SignupView onSignup={handleSignup} />}
          />
          <Route
            path="/movies/:movieId"
            element={<MovieView movies={movies} />}
          />
          <Route
            path="/profile"
            element={<ProfileView user={user} movies={movies} onFavorite={handleFavorite} onRemoveFavorite={handleFavorite} />}
          />

        </Routes>
      </Container>
    </Router>
  );
};