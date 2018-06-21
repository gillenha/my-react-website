import React, { Component } from 'react';

import './welcome_page.css';


class WelcomePage extends Component {
	render() {
		return(
			<div className="Welcome section tc">
				<h1 className="welcome-intro"><strong>Harry Gillen</strong></h1>
				<p>Web Developer</p>
				<p>northern Michigan</p>
				<a href="https://www.linkedin.com/in/harrygillen/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x"></i></a>
				<a href="https://github.com/gillenha" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-3x"></i></a>
				<a href="https://codepen.io/gillenha/" target="_blank" rel="noopener noreferrer"><i className="fab fa-codepen fa-3x"></i></a>
				<a href="mailto:gillen08@gmail.com?Subject=Lets%20connect!" target="_blank" rel="noopener noreferrer"><i className="fas fa-at fa-3x i-hov"></i></a>
				<br />
				<a href="https://drive.google.com/file/d/193vJD4JwUZljrEGc9fxFewbnawzr0LEd/view?usp=sharing" target="_blank" rel="noopener noreferrer"><button className="resume-button">Resume</button></a>
			</div>
		)
	}
}

export default WelcomePage;