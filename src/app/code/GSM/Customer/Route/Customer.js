import React from 'react';
import AccountLoginRoute from './Account/Login';
import AccountRegisterRoute from './Account/Register';
import AccountForgotPassword from './Account/ForgotPassword';

class GSMCustomerRouteCustomer extends React.Component {
	render() {
		return (
			<>
				<AccountLoginRoute />
				<AccountRegisterRoute />
				<AccountForgotPassword />
			</>
		)

	}
}

export default GSMCustomerRouteCustomer;