import React, { Component } from 'react';
import './about.css';

class About extends Component {
	render() {
		return(
			<div className="About section about-section">
				<h1 className="about-intro"><strong>Harry Gillen</strong>: not your average coder</h1>
				<p className="about-item">As a <strong>full stack developer</strong>, I have demonstrated my ability to <strong>crush it</strong>, all day and every day.</p>
				<p className="about-item">I come from a humble background from the backwoods of northern Michigan</p>
				<p className="about-item">I am passionate about three things: sports, history, and technology.</p>
			</div>
		)
	}
}

export default About;