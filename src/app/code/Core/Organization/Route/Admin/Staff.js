import React from 'react';
import { Route } from 'react-router-dom';
import AdminStaff from 'Organization/Page/Admin/Staff';

class CoreOrganizationRouteStaff extends React.Component {
	render() {
		return (
			<>
				<Route path="/organization/staff" exact>
					<AdminStaff />
				</Route>
			</>
		);
	}
}

export default CoreOrganizationRouteStaff;