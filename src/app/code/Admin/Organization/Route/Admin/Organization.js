import React from 'react';
import { Route } from 'react-router-dom';
import AdminOrganization from 'Organization/Page/Admin/Organization';

class AdminOrganizationRouteAdminOrganization extends React.Component {
	render() {
		return (
			<>
				<Route path="/organization/index" exact>
					<AdminOrganization />
				</Route>
			</>
		);
	}
}

export default AdminOrganizationRouteAdminOrganization;