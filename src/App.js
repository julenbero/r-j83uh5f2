import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = { counter: 0 };

	changeText(event) {
		const { textLength } = event.target;
		this.setState({ counter: textLength });
	}

	render() {
		return (
			<div className="container">
				<textarea rows="3" onChange={(event) => this.changeText(event)} />
				<div className="counter">{this.state.counter}</div>
			</div>
		);
	}
}

export default App;
