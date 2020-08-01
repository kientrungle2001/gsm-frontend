import React from 'react';
import { Route } from 'react-router-dom';
import CoreOrganizationPagePosition from '../Page/Position';

class CoreOrganizationRoutePosition extends React.Component {
	render() {
		return (
			<>
				<Route path="/organization/position" exact>
					<CoreOrganizationPagePosition />
				</Route>
			</>
		);
	}
}

export default CoreOrganizationRoutePosition;