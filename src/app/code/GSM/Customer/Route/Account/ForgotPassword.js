import React from 'react';
import { Route } from 'react-router-dom';
import GSMCustomerPageAccountForgotPassword from '../../Page/Account/ForgotPassword';

class GSMCustomerRouteAccountForgotPassword extends React.Component {
    render() {
        return (
            <Route path="/customer/account/forgotpassword" exact>
                <GSMCustomerPageAccountForgotPassword />
            </Route>
        );
    }
}

export default GSMCustomerRouteAccountForgotPassword;