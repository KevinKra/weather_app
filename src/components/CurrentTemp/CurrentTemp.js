import React, { Component } from 'react';
import { fetchTemperatures } from '../../utils/api_calls';

export default class CurrentTemp extends Component {
	state = {
		temperature: null,
		location: null
	};
	async componentDidMount() {
		const { main, name } = await fetchTemperatures();
		this.setState({
			temperature: Math.round(main.temp),
			location: name
		});
	}
	render() {
		const { temperature, location } = this.state;
		if (!temperature) {
			return <p>Loading</p>;
		} else {
			return (
				<section>
					<h4>
						Current Temperature for {location}: {temperature}F
					</h4>
				</section>
			);
		}
	}
}
