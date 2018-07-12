import React, { Component } from 'react';
import robofriends from '../../images/robofriends.png';
import youtubesearch from '../../images/youtubesearch.png';
import facerecapp from '../../images/facerecapp.png';
import weatherapi from '../../images/weatherapi.png';
import twitchtv from '../../images/twitchtv.png';
import wikipedia from '../../images/wikipedia.png';
import bookapp from '../../images/bookapp.png';
import reactweather from '../../images/reactweather.png';
import rollingfarms from '../../images/rollingfarms.jpg';
import './projects.css';

class Projects extends Component {
	render() {
		return (
			<div className="Projects section flex-container">
				<div className="item">
					<img src={rollingfarms} alt="" className="thumb" />
					<div className="overlay">
						<div className="text">
							<h3>Rolling Farms Cafe</h3>
							<p><strong>Created a working website from scratch for a local business in my area. Includes small use of the Google Maps API</strong></p>
							<p>Javascript, HTML5, CSS3, Bootstrap 4</p>
							<p><a href="https://gillenha.github.io/rolling-farms/" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
							<p><a href="https://github.com/gillenha/rolling-farms" target="_blank" rel="noopener noreferrer">Github Repo</a></p>
						</div>
					</div>
				</div>
				<div className="item">
					<img src={robofriends} alt="" className="thumb" />
					<div className="overlay">
						<div className="text">
							<h3>Robofriends</h3>
							<p><strong>Created a list of card elements using the React front end library and a functional search bar</strong></p>
							<p>Javascript, React, Redux</p>
							<p><a href="https://robofriendsapp.herokuapp.com" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
							<p><a href="https://github.com/gillenha/robofriends" target="_blank" rel="noopener noreferrer">Github Repo</a></p>
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
							<p><a href="https://facerecapp.herokuapp.com" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
							<p><a href="https://github.com/gillenha/face-detect-app" target="_blank" rel="noopener noreferrer">Github Repo</a></p>
						</div>
					</div>
				</div>
				<div className="item">
					<img src={bookapp} alt="" className="thumb" />
					<div className="overlay">
						<div className="text">
							<h3>Book App</h3>
							<p><strong>A React app that that connects Redux and React-Redux into a short list of books.</strong></p>
							<p>React, Redux, react-redux, JSX, Babel</p>
							<p><a href="https://gillenha.github.io/redux-book-app/" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
							<p><a href="https://github.com/gillenha/redux-book-app" target="_blank" rel="noopener noreferrer">Github Repo</a></p>
						</div>
					</div>
				</div>
				<div className="item">
					<img src={reactweather} alt="" className="thumb" />
					<div className="overlay">
						<div className="text">
							<h3>Five Day Weather</h3>
							<p><strong>A React app that that connects Redux and React-Redux and allows the user to search for the five day forecast of multiple cities.</strong></p>
							<p>React, Redux, react-redux, JSX, Babel</p>
							<p><a href="https://gillenha.github.io/react-weather-app/" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
							<p><a href="https://github.com/gillenha/react-weather-app" target="_blank" rel="noopener noreferrer">Github Repo</a></p>
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
							<p><a href="https://gillenha.github.io/weather-app/" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
							<p><a href="https://github.com/gillenha/weather-app" target="_blank" rel="noopener noreferrer">Github Repo</a></p>
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
							<p><a href="https://gillenha.github.io/youtubeviewer/" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
							<p><a href="https://github.com/gillenha/youtubeviewer" target="_blank" rel="noopener noreferrer">Github Repo</a></p>
						</div>
					</div>
				</div>
				<div className="item">
					<img src={twitchtv} alt="" className="thumb" />
					<div className="overlay">
						<div className="text">
							<h3>Twitch TV Viewer</h3>
							<p><strong>App that lets you see which of your favorite Twitch TV streamers are currently streaming</strong></p>
							<p>HTML, CSS, JQuery, Javascript, Twitch API</p>
							<p><a href="https://gillenha.github.io/twitchtv-viewer" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
							<p><a href="https://github.com/gillenha/twitchtv-viewer" target="_blank" rel="noopener noreferrer">Github Repo</a></p>
						</div>
					</div>
				</div>
				<div className="item">
					<img src={wikipedia} alt="" className="thumb" />
					<div className="overlay">
						<div className="text">
							<h3>Wikipedia Viewer</h3>
							<p><strong>Simple Wikipedia Viewer using the Wikipedia API</strong></p>
							<p>Javascript, HTML, CSS, JQuery, Wikipedia API</p>
							<p><a href="https://gillenha.github.io/wikipedia-viewer/" target="_blank" rel="noopener noreferrer">Live Demo</a></p>
							<p><a href="https://github.com/gillenha/wikipedia-viewer" target="_blank" rel="noopener noreferrer">Github Repo</a></p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Projects;