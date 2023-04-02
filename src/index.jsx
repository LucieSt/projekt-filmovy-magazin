import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import Menu from './Components/Menu/menu';
import Home from './Components/Home/home';
import Articles from './Components/Articles/articles';
import Movies from './Components/Movies/movies';
import Reviews from './Components/Reviews/reviews';
import Movie from './Components/Movie/movie';
import ErrorPage from './Components/ErrorPage/error-page';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <Menu />
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
        children: [
          {
            path: "/movies/:id",
            element: <Movie />,
          },
        ],
      },
    ],
  },
])

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);
