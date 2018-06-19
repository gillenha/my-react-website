import React, { Component } from 'react';
import './welcome_page.css';


class WelcomePage extends Component {
	render() {
		return(
			<div className="welcome-section tc">
				<h1 className="welcome-intro"><strong>Harry Gillen</strong></h1>
				<p>Web Developer</p>
				<p>northern Michigan</p>
			</div>
		)
	}
}

export default WelcomePage;