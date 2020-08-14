import React from 'react';
import { Route } from 'react-router-dom';
import AdminPosition from 'Organization/Page/Admin/Position';

class AdminOrganizationRoutePosition extends React.Component {
	render() {
		return (
			<>
				<Route path="/organization/position" exact>
					<AdminPosition />
				</Route>
			</>
		);
	}
}

export default AdminOrganizationRoutePosition;