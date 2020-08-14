import React from 'react';
import {
	BrowserRouter as Router,
	Switch
} from "react-router-dom";
import Navbar from 'Menu/Block/Navbar';
import Menu from 'Menu/Block/Menu';
import menuConfig from './config/menu';

import 'bootstrap/dist/js/bootstrap.bundle';
import $ from 'jquery';
import AppRoutes from './Routes';

let { mainMenu } = menuConfig;
function EducationEduMarketApp() {
	return (
		<Router>
			<div>
				<Navbar brand_name="Edu Market">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse">
						<Menu items={mainMenu} className="navbar-nav mr-auto" level={0} />
					</div>
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

export default EducationEduMarketApp;
