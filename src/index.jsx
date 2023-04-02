import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from './Components/Home/home';
import Articles from './Components/Articles/articles';
import Movies from './Components/Movies/movies';
import Reviews from './Components/Reviews/reviews';
import './style.css';

const App = () => {
  return (
    <div className="container">

      <nav className="menu">
        <a href="index.html" className="active">Home</a>
        <a href="reviews.html">Reviews</a>
        <a href="articles.html">Articles</a>
        <a href="movies.html">Movies</a>
      </nav>

      <main>
        <Outlet />
      </main>

    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
