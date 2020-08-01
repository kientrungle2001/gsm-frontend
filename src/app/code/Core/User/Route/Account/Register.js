import React from 'react';
import { Route } from 'react-router-dom';
import CoreUserPageAccountRegister from '../../Page/Account/Register';

class CoreUserRouteAccountRegister extends React.Component {
	render() {
		return (
			<>
				<Route path="/user/account/register" exact>
					<CoreUserPageAccountRegister />
				</Route>
			</>
		);
	}
}

export default CoreUserRouteAccountRegister;