import React, { Component } from 'react';
import './about.css';

class About extends Component {
	render() {
		return(
			<div className="about-container about-image tc">
				<h1 className="about-header">I'm <strong>Harry Gillen</strong>, and I build things</h1>
				<p className="about-text">I'm a full stack web developer who's always in the middle of building something. I have a deep love for programming and I always have a <strong>strong</strong> desire to learn.</p>
				<p className="about-text">I got into web development because the world is changing and technology is touching all areas of our lives. My life thus far has involved many different things, but they all go back to one simple interest: I love working with people and creating something new.</p>
				<p className="about-text">I've worked as an English teacher in South Korea, as a video marketer, and as a congressional staffer on Capitol Hill. But when I began coding, I knew immediately this was something that indulges both the the creative and technical sides of my brain, and that it was something I can do for the rest of my life.</p>
				<p className="about-text">When I'm not coding. I love reading, being outdoors, learning about world history, and exploring new places, food, and people.</p>
			</div>
		)
	}
}

export default About;