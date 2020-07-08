import React from 'react';
import GSMUserPageAccountInfo from '../../Page/Account/Info';
import PrivateRoute from '../../../../../etc/PrivateRoute';

class GSMUserRouteAccountInfo extends React.Component {
	render() {
		return (
			<>
				<PrivateRoute path="/user/account/info" exact>
					<GSMUserPageAccountInfo />
				</PrivateRoute>
			</>
		);
	}
}

export default GSMUserRouteAccountInfo;