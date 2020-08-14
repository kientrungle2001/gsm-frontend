import React from 'react';
import AdminUserRouteUser from 'User/Route/User';
import AdminOrganizationRoute from 'Organization/Route/Organization';

class AppRoutes extends React.Component {
	render() {
		return (
			<>
				<AdminUserRouteUser />
				<AdminOrganizationRoute />
			</>
		)

	}
}

export default AppRoutes;