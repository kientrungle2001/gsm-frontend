import React from 'react';
import { Route } from 'react-router-dom';
import AdminOrganization from 'Organization/Page/Admin/Organization';
import routes from 'Admin/Organization/etc/routes';

class AdminOrganizationRouteAdminOrganization extends React.Component {
	render() {
		return (
			<>
				<Route path={routes.organization.index} exact>
					<AdminOrganization />
				</Route>
			</>
		);
	}
}

export default AdminOrganizationRouteAdminOrganization;