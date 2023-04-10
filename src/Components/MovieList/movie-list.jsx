import React from "react";
import { NavLink } from "react-router-dom";
import { movies } from "./../../movie-database.js"
import './style.css';

const MovieList = () => {
	return (
		<nav className="movie-list">
			{movies.map((movie) => {
				const movieUrl = `/movies/${movie.id}`;
				return <NavLink key={movie.id} to={movieUrl}>{movie.title}</NavLink>
			})}
		</nav>
	)
};

export default MovieList;