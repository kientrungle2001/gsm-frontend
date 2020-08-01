import React from 'react';
import { Route } from 'react-router-dom';
import CoreOrganizationPageIndex from '../Page/Index';

class CoreOrganizationRouteIndex extends React.Component {
	render() {
		return (
			<>
				<Route path="/organization/index" exact>
					<CoreOrganizationPageIndex />
				</Route>
			</>
		);
	}
}

export default CoreOrganizationRouteIndex;