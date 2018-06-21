import React, { Component } from 'react';
import robofriends from '../../images/robofriends.png';
import youtubesearch from '../../images/youtubesearch.png';
import facerecapp from '../../images/facerecapp.png';
import weatherapi from '../../images/weatherapi.png';
import './projects.css';

class Projects extends Component {
	render() {
		return (
			<div className="Projects section flex-container">
				<div className="item">
					<img src={robofriends} alt="" className="thumb" />
					<div className="overlay">
						<div className="text">
							<h3>Robofriends</h3>
							<p><strong>Created a list of card elements using the React front end library and a functional search bar</strong></p>
							<p>Javascript, React, Redux</p>
							<p><a href="https://robofriendsapp.herokuapp.com" target="_blank" rel="noopener noreferrer">Check it out</a></p>
						</div>
					</div>
				</div>
				<div className="item">
					<img src={facerecapp} alt="" className="thumb" />
					<div className="overlay">
						<div className="text">
							<h3>Face Recognition</h3>
							<p className=""><strong>React App using RESTful API to detect faces in images</strong></p>
							<p>Javascript, React, Redux, Node.js, Express.js, PostgreSQL, pgAdmin</p>
							<p><a href="https://facerecapp.herokuapp.com" target="_blank" rel="noopener noreferrer">Check it out</a></p>
						</div>
					</div>
				</div>
				<div className="item">
					<img src={weatherapi} alt="" className="thumb" />
					<div className="overlay">
						<div className="text">
							<h3>Weather App</h3>
							<p><strong>Created a weather app that displays the current weather using the Dark Sky API</strong></p>
							<p>HTML, CSS, Javascript, JQuery</p>
							<p><a href="https://gillenha.github.io/weather-app/" target="_blank" rel="noopener noreferrer">Check it out</a></p>
						</div>
					</div>
				</div>
				<div className="item">
					<img src={youtubesearch} alt="" className="thumb" />
					<div className="overlay">
						<div className="text">
							<h3>YouTube Viewer</h3>
							<p><strong>Simple YouTube viewer using the youtube-search-api package and React</strong></p>
							<p>Javascript, React, Redux</p>
							<p><a href="https://watchyoutube.herokuapp.com/" target="_blank" rel="noopener noreferrer">Check it out</a></p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Projects;