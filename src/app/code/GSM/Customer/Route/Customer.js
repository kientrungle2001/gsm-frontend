import React from 'react';
import AccountLoginRoute from './Account/Login';
import AccountRegisterRoute from './Account/Register';
import AccountForgotPasswordRoute from './Account/ForgotPassword';
import AccountInfoRoute from './Account/Info';

class GSMCustomerRouteCustomer extends React.Component {
	render() {
		return (
			<>
				<AccountLoginRoute />
				<AccountRegisterRoute />
				<AccountForgotPasswordRoute />
				<AccountInfoRoute />
			</>
		)

	}
}

export default GSMCustomerRouteCustomer;