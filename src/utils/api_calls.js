import { getUserCoordinates } from './helpers';
require('dotenv').config();
const url = 'http://api.openweathermap.org/data/2.5';

export const fetchCurrentTemp = async () => {
	const { longitude, latitude } = await getUserCoordinates();
	try {
		let response = await fetch(
			`${url}/weather?APPID=${process.env.REACT_APP_API_KEY}&lat=${latitude}&lon=${longitude}&units=imperial`
		);
		return await response.json();
	} catch (error) {
		new Error(error);
	}
};
