import React from 'react';
import { Route } from 'react-router-dom';
import GSMCustomerPageAccountRegister from '../../Page/Account/Register';

class GSMCustomerRouteAccountRegister extends React.Component {
	render() {
		return (
			<>
				<Route path="/customer/account/register" exact>
					<GSMCustomerPageAccountRegister />
				</Route>
			</>
		);
	}
}

export default GSMCustomerRouteAccountRegister;