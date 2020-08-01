import React from 'react';
import { Route } from 'react-router-dom';
import CoreOrganizationPagePrivilege from '../Page/Privilege';

class CoreOrganizationRoutePrivilege extends React.Component {
	render() {
		return (
			<>
				<Route path="/organization/privilege" exact>
					<CoreOrganizationPagePrivilege />
				</Route>
			</>
		);
	}
}

export default CoreOrganizationRoutePrivilege;