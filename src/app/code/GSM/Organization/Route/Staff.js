import React from 'react';
import { Route } from 'react-router-dom';
import GSMOrganizationPageStaff from '../Page/Staff';

class GSMOrganizationRouteStaff extends React.Component {
	render() {
		return (
			<>
				<Route path="/organization/staff" exact>
					<GSMOrganizationPageStaff />
				</Route>
			</>
		);
	}
}

export default GSMOrganizationRouteStaff;