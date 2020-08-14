import React from 'react';
import {
	BrowserRouter as Router,
	Switch
} from "react-router-dom";
import Navbar from 'Menu/Block/Navbar';
import Menu from 'Menu/Block/Menu';

import menuConfig from 'Menu/config/menu';

import './App.scss';

import 'bootstrap/dist/js/bootstrap.bundle';
import $ from 'jquery';
import AppRoutes from './app/etc/Routes';

let { mainMenu } = menuConfig;
function App() {
	return (
		<Router>
			<div>
				<Navbar brand_name="Core">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse">
						<Menu items={mainMenu} className="navbar-nav mr-auto" level={0} />
						<form className="form-inline my-2 my-lg-0">
							<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
							<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
						</form>
					</div>
				</Navbar>

				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<AppRoutes />
				</Switch>
			</div>
		</Router>

	);
}

$('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
	if (!$(this).next().hasClass('show')) {
		$(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
	}
	var $subMenu = $(this).next('.dropdown-menu');
	$subMenu.toggleClass('show');


	$(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
		$('.dropdown-submenu .show').removeClass('show');
	});


	return false;
});

export default App;
