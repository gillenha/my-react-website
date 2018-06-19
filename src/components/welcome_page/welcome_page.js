import React, { Component } from 'react';
import './welcome_page.css';


class WelcomePage extends Component {
	render() {
		return(
			<div className="welcome-section tc">
				<h1 className="welcome-intro"><strong>Harry Gillen</strong></h1>
				<p>Web Developer</p>
				<p>northern Michigan</p>
				<i className="fab fa-linkedin fa-3x"></i>
				<i className="fab fa-github fa-3x"></i>
				<i className="fab fa-twitter fa-3x"></i>
			</div>
		)
	}
}

export default WelcomePage;