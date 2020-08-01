import React from 'react';
import CoreUserPageAccountInfo from '../../Page/Account/Info';
import PrivateRoute from '../../../../../etc/PrivateRoute';

class CoreUserRouteAccountInfo extends React.Component {
	render() {
		return (
			<>
				<PrivateRoute path="/user/account/info" exact>
					<CoreUserPageAccountInfo />
				</PrivateRoute>
			</>
		);
	}
}

export default CoreUserRouteAccountInfo;