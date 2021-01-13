import React from 'react';
import {
	BrowserRouter as Router,
	Switch
} from "react-router-dom";
import Navbar from 'Menu/Block/Navbar';
import Menu from 'Menu/Block/Menu';
import menuConfig from './config/menu';

import 'bootstrap/dist/js/bootstrap.bundle';
import AppRoutes from './Routes';
import {Navbar as BSNavbar} from 'Common/Bootstrap/Block/Bootstrap';

let { mainMenu } = menuConfig;
let $ = window.jQuery;
function EducationEduMarketApp() {
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
