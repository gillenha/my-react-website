import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
	render() {
		return(
			<div className="contact-info tc ">
					<p><a className="" href="mailto:gillen08@gmail.com?Subject=Hello%20there!" target="_top"><i className="fa fa-envelope i-hov" aria-hidden="true" /> gillen08@gmail.com</a></p>
					<p><a className="" href="https://www.linkedin.com/in/harrygillen/" target="_top"><i className="fab fa-linkedin i-hov" aria-hidden="true" />LinkedIn</a></p>
					<p><a className="" href="https://github.com/gillenha"><i className="fab fa-github i-hov" aria-hidden="true" />Github</a></p>
					<p><a className="" href="https://codepen.io/gillenha/"><i className="fab fa-codepen i-hov" aria-hidden="true" />CodePen</a></p>
			</div>
		)
	}
}

export default Contact;