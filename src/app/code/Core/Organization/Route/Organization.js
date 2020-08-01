import React from 'react';
import AdminOrganizationRoute from './Admin/Organization';
import OrganizationPositionRoute from './Admin/Position';
import OrganizationStaffRoute from './Admin/Staff';
import OrganizationPrivilegeRoute from './Admin/Privilege';

class CoreOrganizationRoute extends React.Component {
	render() {
		return (
			<>
				<AdminOrganizationRoute />
				<OrganizationPositionRoute />
				<OrganizationStaffRoute />
				<OrganizationPrivilegeRoute />
			</>
		)

	}
}

export default CoreOrganizationRoute;