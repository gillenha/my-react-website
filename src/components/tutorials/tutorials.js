import React, { Component } from 'react';
// import YouTube from 'react-youtube';
import './tutorials.css';

class Tutorials extends Component {
	render() {
		return(
			<div className="tutorials tc">
				<p className="text-box">When I solve a Javascript problem, I love to explain how I got there. It helps sharpen my own insights and log how I was able to complete a task. Take a look!</p>
				<div className="video-container">
					<iframe 
						width="560" 
						height="315" 
						src="https://www.youtube.com/embed/a-IbUyGxewI" 
						frameborder="0" 
						allow="autoplay; encrypted-media" 
						allowfullscreen></iframe>
				</div>
				<p class-name="text-box">Check out more of my tutorials <a href="https://www.youtube.com/user/gillenha/videos?view_as=subscriber" target="_blank" rel="noopener noreferrer">here</a>.</p>
			</div>
		);
	}

	_onReady(event) {
		event.target.pauseVideo();
	}
}

export default Tutorials;