import React from 'react';
import { Route } from 'react-router-dom';
import GSMUserPageAccountLogin from '../../Page/Account/Login';

class GSMUserRouteAccountLogin extends React.Component {
	render() {
		return (
			<>
			<Route path="/" exact>
				<GSMUserPageAccountLogin />
			</Route>
			<Route path="/user/account/login" exact>
				<GSMUserPageAccountLogin />
			</Route>
			</>
			);
	}
}

export default GSMUserRouteAccountLogin;