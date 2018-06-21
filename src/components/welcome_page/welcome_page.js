import React, { Component } from 'react';
import { cityId, API_KEY } from '../../secrets.js';
import './welcome_page.css';


class WelcomePage extends Component {
	constructor() {
		super();
		this.state = {
			weather: "",
			temp: ""
		};
	}

	componentDidMount() {
		fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}`)
		.then(response => response.json()
		.then(data => ({
			data: data,
			status: response.status
		}))
	).then(res => {
		let weather = res.data.weather[0].description;
		let temp = res.data.main.temp;
		this.setState({ 
			weather: weather,
			temp: temp
		 });
	})
}




	render() {
		return(
			<div className="Welcome section tc">
				<h1 className="welcome-intro"><strong>Harry Gillen</strong></h1>
				<p>Web Developer</p>
				<p>I live in northern Michigan,
				<br />
				where the weather is:</p>
				<p className="weather-text">
				{this.state.temp}&deg;
				<br/>
				{this.state.weather}
				</p>				
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