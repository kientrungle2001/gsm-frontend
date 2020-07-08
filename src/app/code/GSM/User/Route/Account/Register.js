import React from 'react';
import { Route } from 'react-router-dom';
import GSMUserPageAccountRegister from '../../Page/Account/Register';

class GSMUserRouteAccountRegister extends React.Component {
	render() {
		return (
			<>
				<Route path="/user/account/register" exact>
					<GSMUserPageAccountRegister />
				</Route>
			</>
		);
	}
}

export default GSMUserRouteAccountRegister;