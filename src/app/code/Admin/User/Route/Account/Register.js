import React from 'react';
import { Route } from 'react-router-dom';
import AdminUserPageAccountRegister from '../../Page/Account/Register';

class AdminUserRouteAccountRegister extends React.Component {
	render() {
		return (
			<>
				<Route path="/user/account/register" exact>
					<AdminUserPageAccountRegister />
				</Route>
			</>
		);
	}
}

export default AdminUserRouteAccountRegister;