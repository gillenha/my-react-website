import React, { Component } from 'react';
import './about.css';

class About extends Component {
	render() {
		return(
			<div className="about-container tc">
				<h1 className=""><strong>Harry Gillen</strong>: full stack web developer</h1>
				<p className="about-text">I love technology and I love building things, and I always have a <strong>strong</strong> desire to learn.</p>
				<p className="about-text">I got into web development because the world is changing and technology is touching all areas of our lives and businesses.</p>
				<p className="about-text">I'm not always coding. I love reading about history, being outdoors, and exploring new places, food, people, and things.</p>
			</div>
		)
	}
}

export default About;