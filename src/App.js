import React, { Component } from 'react';
import './App.css';

class App extends Component {
	state = { value: '' };

	changeText(event) {
		this.setState({ value: event.target.value });
	}

	render() {
		return (
			<div className="container">
				<textarea rows="3" onChange={(event) => this.changeText(event)} value={this.state.value} />
				<div className="counter">{this.state.value.length}</div>
			</div>
		);
	}
}

export default App;
