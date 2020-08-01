import React from 'react';
import CoreUserRouteUser from 'User/Route/User';
import CoreOrganizationRoute from 'Organization/Route/Organization';

class AppRoutes extends React.Component {
	render() {
		return (
			<>
				<CoreUserRouteUser />
				<CoreOrganizationRoute />
			</>
		)

	}
}

export default AppRoutes;