import React from 'react';
import { Route } from 'react-router-dom';
import CoreUserPageAccountLogin from '../../Page/Account/Login';

class CoreUserRouteAccountLogin extends React.Component {
	render() {
		return (
			<>
			<Route path="/" exact>
				<CoreUserPageAccountLogin />
			</Route>
			<Route path="/user/account/login" exact>
				<CoreUserPageAccountLogin />
			</Route>
			</>
			);
	}
}

export default CoreUserRouteAccountLogin;