import React from 'react';
import { Route } from 'react-router-dom';
import CoreUserPageAccountForgotPassword from '../../Page/Account/ForgotPassword';

class CoreUserRouteAccountForgotPassword extends React.Component {
    render() {
        return (
            <Route path="/user/account/forgotpassword" exact>
                <CoreUserPageAccountForgotPassword />
            </Route>
        );
    }
}

export default CoreUserRouteAccountForgotPassword;