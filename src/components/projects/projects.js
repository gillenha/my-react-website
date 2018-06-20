import React, { Component } from 'react';
// import robofriends from '../images/robofriends.png';
// import './projects.css';

class Projects extends Component {
	render() {
		return (
			<div className="">
				<div className="">
					<img src="./images/robofriends.png" alt="" className="" />
					<div className="">
						<div className="">
							<h3>Robofriends</h3>
							<p className=""><strong>Created a list of card elements using the React front end library and a functional search bar</strong></p>
							<p>Javascript, React, Redux</p>
							<p><a href="https://robofriendsapp.herokuapp.com" target="_blank" rel="noopener noreferrer">Explore App</a></p>
						</div>
					</div>
				</div>
				<div className="">
					<img src="" alt="" className="" />
					<div className="">
						<div className="">
							<h3>YouTube Viewer</h3>
							<p className=""><strong>Simple YouTube viewer using the youtube-search-api package and React</strong></p>
							<p>Javascript, React, Redux</p>
							<p><a href="https://watchyoutube.herokuapp.com/" target="_blank" rel="noopener noreferrer">Explore App</a></p>
						</div>
					</div>
				</div>
				<div className="">
					<img src="" alt="" className="" />
					<div className="">
						<div className="">
							<h3>Weather App</h3>
							<p className=""><strong>Created a weather app that displays the current weather using the Dark Sky API</strong></p>
							<p>HTML, CSS, Javascript, JQuery</p>
							<p><a href="https://gillenha.github.io/weather-app/" target="_blank" rel="noopener noreferrer">Explore App</a></p>
						</div>
					</div>
				</div>
				<div className="">
					<img src="" alt="" className="" />
					<div className="">
						<div className="">
							<h3>Face Recognition App</h3>
							<p className=""><strong>Created React app with backend components that store user credentials and recognize faces in images</strong></p>
							<p>Javascript, React, Redux, Node.js, Express.js, PostgreSQL, pgAdmin</p>
							<p><a href="https://facerecapp.herokuapp.com" target="_blank" rel="noopener noreferrer">Explore App</a></p>
						</div>
					</div>
				</div>
				<div className="">
					<img src="" alt="" className="" />
					<div className="">
						<div className="">
							<h3>Twitch TV Viewer</h3>
							<p className=""><strong>Uses the Twitch.tv API to check if a prepopulated list of users is currently streaming</strong></p>
							<p>Javascript, HTML, CSS, jQuery, AJAX</p>
							<p><a href="https://gillenha.github.io/twitchtv-viewer/" target="_blank" rel="noopener noreferrer">Explore App</a></p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Projects;