import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './components/welcome_page/welcome_page';
import Navbar from './components/navbar/navbar';
import Projects from './components/projects/projects';
import About from './components/about/about';
import Tutorials from './components/tutorials/tutorials';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import './index.css';

class App extends Component {
	render() {
		return(
			<div className="container">
					<Navbar />
					<WelcomePage />
				<h2 className="heading tc underline" id="projects">projects</h2>
					<Projects />
				<h2 className="heading tc underline" id="about">about</h2>
					<About />
				<h2 className="heading tc underline" id="tutorials">tutorials</h2>
					<Tutorials />
				<h2 className="heading tc underline" id="contact">let\'s get in touch</h2>
					<Contact />
					<Footer />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
