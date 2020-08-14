import React from 'react';
import { Route } from 'react-router-dom';
import AdminUserPageAccountLogin from '../../Page/Account/Login';

class AdminUserRouteAccountLogin extends React.Component {
	render() {
		return (
			<>
			<Route path="/" exact>
				<AdminUserPageAccountLogin />
			</Route>
			<Route path="/user/account/login" exact>
				<AdminUserPageAccountLogin />
			</Route>
			</>
			);
	}
}

export default AdminUserRouteAccountLogin;