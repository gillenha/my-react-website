import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import WelcomePage from './components/welcome_page/welcome_page';
import Navbar from './components/navbar/navbar';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import './index.css';

class App extends Component {
	render() {
		return(
			<div>
				<Navbar />
				<WelcomePage />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
