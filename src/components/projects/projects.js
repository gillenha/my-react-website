import React, { Component } from 'react';
// import robofriends from 'robofriends.png';
import './projects.css';

class Projects extends Component {
	render() {
		return (
			<div className="Projects section flex-container">
				<div className="item">
					<img src="robofriends.png" className="thumb" />
					<div className="overlay">
						<div className="text">
							<h3>Project 1</h3>
							<p><strong>Created a list of card elements using the React front end library</strong></p>
							<p>Javascript, React, Redux</p>
							<p><a href="https://robofriendsapp.herokuapp.com" target="_blank">Explore App</a></p>
						</div>
					</div>
				</div>
				<div className="item">
					<img src="" className="thumb" />
					<div className="overlay">
						<div className="text">
							<h3>Project 1</h3>
							<p><strong>Created a list of card elements using the React front end library</strong></p>
							<p>Javascript, React, Redux</p>
							<p><a href="https://robofriendsapp.herokuapp.com" target="_blank">Explore App</a></p>
						</div>
					</div>
				</div>
				<div className="item">
					<img src="" className="thumb" />
					<div className="overlay">
						<div className="text">
							<h3>Project 1</h3>
							<p><strong>Created a list of card elements using the React front end library</strong></p>
							<p>Javascript, React, Redux</p>
							<p><a href="https://robofriendsapp.herokuapp.com" target="_blank">Explore App</a></p>
						</div>
					</div>
				</div>
				<div className="item">
					<img src="" className="thumb" />
					<div className="overlay">
						<div className="text">
							<h3>Project 1</h3>
							<p><strong>Created a list of card elements using the React front end library</strong></p>
							<p>Javascript, React, Redux</p>
							<p><a href="https://robofriendsapp.herokuapp.com" target="_blank">Explore App</a></p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Projects;