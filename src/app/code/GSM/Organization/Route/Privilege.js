import React from 'react';
import { Route } from 'react-router-dom';
import GSMOrganizationPagePrivilege from '../Page/Privilege';

class GSMOrganizationRoutePrivilege extends React.Component {
	render() {
		return (
			<>
				<Route path="/organization/privilege" exact>
					<GSMOrganizationPagePrivilege />
				</Route>
			</>
		);
	}
}

export default GSMOrganizationRoutePrivilege;