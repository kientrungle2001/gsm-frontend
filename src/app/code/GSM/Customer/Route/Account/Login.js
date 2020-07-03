import React from 'react';
import { Route } from 'react-router-dom';
import GSMCustomerPageAccountLogin from '../../Page/Account/Login';

class GSMCustomerRouteAccountLogin extends React.Component {
	render() {
		return (
			<>
			<Route path="/" exact>
				<GSMCustomerPageAccountLogin />
			</Route>
			<Route path="/customer/account/login" exact>
				<GSMCustomerPageAccountLogin />
			</Route>
			</>
			);
	}
}

export default GSMCustomerRouteAccountLogin;