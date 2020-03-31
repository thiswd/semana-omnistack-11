import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Switch garante que uma rota é executada por vez

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
	// exact faz com que o React procure uma rota com '/' e não qualquer uma que comece com '/'
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Logon} />
				<Route path="/register" component={Register} />
				<Route path="/profile" component={Profile} />
				<Route path="/incidents/new" component={NewIncident} />
			</Switch>
		</BrowserRouter>
	);
}