import React from 'react';
import { Route } from 'react-router-dom';
import GSMOrganizationPagePosition from '../Page/Position';

class GSMOrganizationRoutePosition extends React.Component {
	render() {
		return (
			<>
				<Route path="/organization/position" exact>
					<GSMOrganizationPagePosition />
				</Route>
			</>
		);
	}
}

export default GSMOrganizationRoutePosition;