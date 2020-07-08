import React from 'react';
import { Route } from 'react-router-dom';
import GSMUserPageAccountForgotPassword from '../../Page/Account/ForgotPassword';

class GSMUserRouteAccountForgotPassword extends React.Component {
    render() {
        return (
            <Route path="/user/account/forgotpassword" exact>
                <GSMUserPageAccountForgotPassword />
            </Route>
        );
    }
}

export default GSMUserRouteAccountForgotPassword;