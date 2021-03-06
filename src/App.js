import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Details from './pages/details/Details';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/forecast">
					<Details />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
