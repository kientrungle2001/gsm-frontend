import React from 'react';
import GSMCustomerRouteCustomer from '../code/GSM/Customer/Route/Customer';
import GSMOrganizationRoute from '../code/GSM/Organization/Route/Organization';

class AppRoutes extends React.Component {
	render() {
		return (
			<>
				<GSMCustomerRouteCustomer />
				<GSMOrganizationRoute />
			</>
		)

	}
}

export default AppRoutes;