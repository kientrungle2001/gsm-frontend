import React from 'react';
import AdminUserPageAccountInfo from '../../Page/Account/Info';
import PrivateRoute from '../../../../../etc/PrivateRoute';

class AdminUserRouteAccountInfo extends React.Component {
	render() {
		return (
			<>
				<PrivateRoute path="/user/account/info" exact>
					<AdminUserPageAccountInfo />
				</PrivateRoute>
			</>
		);
	}
}

export default AdminUserRouteAccountInfo;