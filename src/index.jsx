import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import Home from './Components/Home/home';
import Articles from './Components/Articles/articles';
import Movies from './Components/Movies/movies';
import Reviews from './Components/Reviews/reviews';
import ErrorPage from './Components/ErrorPage/error-page';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/articles">Articles</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
    ],
  },
])

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);
