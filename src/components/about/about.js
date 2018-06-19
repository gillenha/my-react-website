import React, { Component } from 'react';
import './about.css';

class About extends Component {
	render() {
		return(
			<div className="About section about-section">
				<h1 className="about-intro"><strong>Harry Gillen</strong>: full stack web developer</h1>
				<p className="about-item">As a <strong>full stack developer</strong>, I develop the lorem ipsum dolor</p>
				<p className="about-item">I come from a humble background from the backwoods of northern Michigan</p>
				<p className="about-item">I am passionate about three things: thing one thing two thing three.</p>
			</div>
		)
	}
}

export default About;