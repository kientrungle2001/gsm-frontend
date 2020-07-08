import React from 'react';
import GSMUserRouteUser from '../code/GSM/User/Route/User';
import GSMOrganizationRoute from '../code/GSM/Organization/Route/Organization';

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