import React, { useEffect } from 'react';
import {
	BrowserRouter as Router,
	Switch
} from "react-router-dom";
import Navbar from 'Menu/Block/Navbar';
import Menu from 'Menu/Block/Menu';
import menuConfig from './config/menu';
import menuJQuery from './web/js/menu';
import 'bootstrap/dist/js/bootstrap.bundle';
import AppRoutes from './Routes';
import {Navbar as BSNavbar} from 'Common/Bootstrap/Block/Bootstrap';

let { mainMenu } = menuConfig;

function EducationEduMarketApp() {
	useEffect(() => {
		menuJQuery();
	})
	return (
		<Router>
			<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
			<div>
				<Navbar brand_name="Edu Market">
					<BSNavbar.Toggler data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" />

					<BSNavbar.Collapse>
						<Menu items={mainMenu} className="navbar-nav mr-auto" level={0} />
					</BSNavbar.Collapse>
				</Navbar>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<AppRoutes />
				</Switch>
				<footer>
					@Copyright Edu Market
				</footer>
			</div>
		</Router>

	);
}

export default EducationEduMarketApp;
