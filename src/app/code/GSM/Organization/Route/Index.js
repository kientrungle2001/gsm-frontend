import React from 'react';
import { Route } from 'react-router-dom';
import GSMOrganizationPageIndex from '../Page/Index';

class GSMOrganizationRouteIndex extends React.Component {
	render() {
		return (
			<>
				<Route path="/organization/index" exact>
					<GSMOrganizationPageIndex />
				</Route>
			</>
		);
	}
}

export default GSMOrganizationRouteIndex;