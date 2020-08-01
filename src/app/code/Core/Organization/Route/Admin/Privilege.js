import React from 'react';
import { Route } from 'react-router-dom';
import AdminPrivilege from 'Organization/Page/Admin/Privilege';

class CoreOrganizationRoutePrivilege extends React.Component {
	render() {
		return (
			<>
				<Route path="/organization/privilege" exact>
					<AdminPrivilege />
				</Route>
			</>
		);
	}
}

export default CoreOrganizationRoutePrivilege;