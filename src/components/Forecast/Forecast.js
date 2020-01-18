import React, { Component } from 'react';
import { fetchTemperatures } from '../../utils/api_calls';

export default class Forecast extends Component {
	state = {
		forecastData: null
	};

	async componentDidMount() {
		const data = await fetchTemperatures('forecast');
		this.setState({ forecastData: this.parseForecastFetch(data) });
	}

	parseForecastFetch = (data) => {
		return data.list.map((element, i) => {
			return {
				id: i + 1,
				temp: Math.round(element.main.temp),
				date: new Date(element.dt * 1000).toString(),
				weather: element.weather[0]
			};
		});
	};

	render() {
		if (this.state.forecastData === null) {
			return <p>Loading</p>;
		} else {
			return (
				<section>
					{this.state.forecastData.map((forecast) => {
						return (
							<article key={forecast.id}>
								<img src={`http://openweathermap.org/img/wn/${forecast.weather.icon}.png`} alt="" />
								<h4>
									{forecast.date}. Temperature: {forecast.temp}F
								</h4>
							</article>
						);
					})}
				</section>
			);
		}
	}
}
