import React from "react";
import { Link } from "react-router-dom";
import { movies } from "./../../movie-database.js"
import './style.css';

console.log(movies);

const MovieList = () => {
	return (
		<nav className="movie-list">

			{movies.map((movie) => {
				const movieUrl = `/movies/${movie.id}`;
				return <Link key={movie.id} to={movieUrl}>{movie.title}</Link>
			})}

		</nav>
	)
};

export default MovieList;