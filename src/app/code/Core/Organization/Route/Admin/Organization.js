import React from 'react';
import { Route } from 'react-router-dom';
import CoreOrganizationPageOrganization from 'Organization/Page/Organization';

class CoreOrganizationRouteAdminOrganization extends React.Component {
	render() {
		return (
			<>
				<Route path="/organization/index" exact>
					<CoreOrganizationPageOrganization />
				</Route>
			</>
		);
	}
}

export default CoreOrganizationRouteAdminOrganization;