import React from 'react';
import GSMCustomerPageAccountInfo from '../../Page/Account/Info';
import PrivateRoute from '../../../../../etc/PrivateRoute';

class GSMCustomerRouteAccountInfo extends React.Component {
	render() {
		return (
			<>
				<PrivateRoute path="/customer/account/info" exact>
					<GSMCustomerPageAccountInfo />
				</PrivateRoute>
			</>
		);
	}
}

export default GSMCustomerRouteAccountInfo;