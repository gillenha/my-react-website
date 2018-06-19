import React, { Component } from 'react';
import './welcome_page.css';


class WelcomePage extends Component {
	render() {
		return(
			<div className="welcome-section tc">
				<h1 className="welcome-intro"><strong>Harry Gillen</strong></h1>
				<p>Web Developer</p>
				<p>northern Michigan</p>
				<a href="https://www.linkedin.com/in/harrygillen/" target="_blank"><i className="fab fa-linkedin fa-3x"></i></a>
				<a href="https://github.com/gillenha" target="_blank"><i className="fab fa-github fa-3x"></i></a>
				<a href="https://twitter.com/HarryHGillen" target="_blank"><i className="fab fa-twitter fa-3x"></i></a>
				<a href="mailto:gillen08@gmail.com?Subject=Lets%20connect!" target="_top" target="_blank"><i className="fas fa-at fa-3x i-hov"></i></a>
			</div>
		)
	}
}

export default WelcomePage;