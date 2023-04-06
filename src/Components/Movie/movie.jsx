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
			<p>({movie.year})</p>
			<h3>{movie.director}</h3>
			<p>{movie.storyline}</p>
			<p><b>Cast</b>:</p>
			<ul>
				{movie.cast.map((actor) => {
					return <li key={actor.name}>{actor.name} as <i>{actor.as}</i></li>
				})}
			</ul>

			<p><b>Genre</b>: {movie.genre}</p>
			<p><b>Rating</b>: {movie.rating*10}%</p>

		</div>
	)
};

export default Movie;