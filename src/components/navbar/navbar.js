import React, { Component } from 'react';
// import './navbar.css'

class Navbar extends Component {
	render() {
		return(
			<div className="">
				<ul className="">
					<li className="">HG</li>
					<li className=""><a href="#contact" className="">Contact</a></li>
					<li className=""><a href="#tutorials" className="">Tutorials</a></li>
					<li className=""><a href="#about" className="">About</a></li>
					<li className=""><a href="#projects" className="">Projects</a></li>
				</ul>
			</div>
		)
	}
}

export default Navbar;