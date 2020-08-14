import React from 'react';
import OrganizationRoute from './Admin/Organization';
import PositionRoute from './Admin/Position';
import StaffRoute from './Admin/Staff';
import PrivilegeRoute from './Admin/Privilege';

class AdminOrganizationRoute extends React.Component {
	render() {
		return (
			<>
				<OrganizationRoute />
				<PositionRoute />
				<StaffRoute />
				<PrivilegeRoute />
			</>
		)

	}
}

export default AdminOrganizationRoute;