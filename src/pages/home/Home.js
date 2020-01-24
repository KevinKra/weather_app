import React from 'react';
import CurrentTemp from '../../components/CurrentTemp/CurrentTemp';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<section>
			<nav>
				<Link to="/forecast">5-day Forecast</Link>
			</nav>
			<h3>Home Page</h3>
			<CurrentTemp />
		</section>
	);
}
