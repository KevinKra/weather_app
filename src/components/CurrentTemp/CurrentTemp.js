import React, { Component } from 'react';
import { fetchCurrentTemp } from '../../utils/api_calls';

export default class CurrentTemp extends Component {
	state = {
		temperature: '',
		location: ''
	};
	async componentDidMount() {
		const { main, name } = await fetchCurrentTemp();
		this.setState({
			temperature: Math.floor(main.temp),
			location: name
		});
	}
	render() {
		return (
			<section>
				<h4>Current Temperature for {this.state.location}</h4>
				<p>{this.state.temperature} F</p>
			</section>
		);
	}
}
