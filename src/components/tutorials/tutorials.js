import React, { Component } from 'react';
import YouTube from 'react-youtube';
// import './tutorials.css';

class Tutorials extends Component {
	render() {
		const opts = {
			height: '300',
			width: '500',
			playerVars: { 
				autoplay: 0
			}
		}

		return(
			<div className="">
				<p className="">I make Javascript tutorials. Check out how I solve problems!</p>
				<div className="">
					<YouTube 
						className=""
						videoId="a-IbUyGxewI" 
						opts={opts} 
						onReady={this._onReady} 
					/>
					<YouTube 
						className=""
						videoId="PenXAtiFmJc" 
						opts={opts} 
						onReady={this._onReady} 
					/>
					<YouTube 
						className=""
						videoId="WvykNpJrmBI" 
						opts={opts} 
						onReady={this._onReady} 
					/>
					<YouTube 
						className=""
						videoId="j8CU_quwHv0" 
						opts={opts} 
						onReady={this._onReady} 
					/>
					</div>
			</div>
		);
	}

	_onReady(event) {
		event.target.pauseVideo();
	}
}

export default Tutorials;