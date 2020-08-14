import React from 'react';
import AdminOrganizationRoute from './Admin/Organization';
import AdminPositionRoute from './Admin/Position';
import AdminStaffRoute from './Admin/Staff';
import AdminPrivilegeRoute from './Admin/Privilege';

class AdminOrganizationRoute extends React.Component {
	render() {
		return (
			<>
				<AdminOrganizationRoute />
				<AdminPositionRoute />
				<AdminStaffRoute />
				<AdminPrivilegeRoute />
			</>
		)

	}
}

export default AdminOrganizationRoute;