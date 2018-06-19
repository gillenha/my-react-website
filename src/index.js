import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './components/welcome_page/welcome_page';
import Navbar from './components/navbar/navbar';
import Projects from './components/projects/projects';
import About from './components/about/about';
import Tutorials from './components/tutorials/tutorials';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import './index.css';

class App extends Component {
	render() {
		return(
			<div>
					<Navbar />
					<WelcomePage />
				<h2 className="heading tc" id="projects">PROJECTS</h2>
					<Projects />
				<h2 className="heading tc" id="about">ABOUT</h2>
					<About />
				<h2 className="heading tc" id="about">TUTORIALS</h2>
					<Tutorials />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
