import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component {
	render() {
		return(
			<div className="nav-container">
				<ul className="nav-center">
					<li><a className="active" href="#home">Home</a></li>
					<li><a href="#skills">Skills</a></li>
					<li><a href="#contact">Portfolio</a></li>
					<li><a href="#about">Contact</a></li>
				</ul>
			</div>
		)
	}
}

export default Navbar;