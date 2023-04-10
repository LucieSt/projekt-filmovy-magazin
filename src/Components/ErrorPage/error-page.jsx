import React from "react";
import emoji from './images/sad_emoji.jpg'
import './style.css';

const ErrorPage = () => {
	return (
		<div className="container error-container">
			<h1>Error 404</h1>
			<p>We are sorry, but his page does not exist</p>
			<img className="error-img" src={emoji} alt="sad emoji" width="100px" />
		</div>
	)
};

export default ErrorPage;