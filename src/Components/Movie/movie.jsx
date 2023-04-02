import React from "react";
import { useParams } from "react-router-dom";
import { movies } from './../../movie-database.js';
import './style.css';

const Movie = () => {

	const { id } = useParams();
	const movie = movies.find(film => film.id === Number(id));

	return (
		<div className="movie">
			<img src={movie.poster} alt={movie.title}/>
			<h2>{movie.title}</h2>
			<p>{movie.storyline}</p>

		</div>
	)
};

export default Movie;