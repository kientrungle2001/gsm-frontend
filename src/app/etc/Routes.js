import React from 'react';
import GSMUserRouteUser from 'User/Route/User';
import GSMOrganizationRoute from 'Organization/Route/Organization';

class AppRoutes extends React.Component {
	render() {
		return (
			<>
				<GSMUserRouteUser />
				<GSMOrganizationRoute />
			</>
		)

	}
}

export default AppRoutes;