import React from 'react';
import OrganizationIndexRoute from './Index';
import OrganizationPositionRoute from './Position';
import OrganizationStaffRoute from './Staff';
import OrganizationPrivilegeRoute from './Privilege';

class CoreOrganizationRoute extends React.Component {
	render() {
		return (
			<>
				<OrganizationIndexRoute />
				<OrganizationPositionRoute />
				<OrganizationStaffRoute />
				<OrganizationPrivilegeRoute />
			</>
		)

	}
}

export default CoreOrganizationRoute;