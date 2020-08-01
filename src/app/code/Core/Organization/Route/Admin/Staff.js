import React from 'react';
import { Route } from 'react-router-dom';
import CoreOrganizationPageStaff from 'Organization/Page/Staff';

class CoreOrganizationRouteStaff extends React.Component {
	render() {
		return (
			<>
				<Route path="/organization/staff" exact>
					<CoreOrganizationPageStaff />
				</Route>
			</>
		);
	}
}

export default CoreOrganizationRouteStaff;