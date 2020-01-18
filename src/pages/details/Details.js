import React from 'react';
import Forecast from '../../components/Forecast/Forecast';
import { Link } from 'react-router-dom';

export default function Details() {
	return (
		<div>
			<nav>
				<Link to="/">Home</Link>
			</nav>
			<Forecast />
		</div>
	);
}
