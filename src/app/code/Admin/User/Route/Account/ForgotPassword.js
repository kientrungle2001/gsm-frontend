import React from 'react';
import { Route } from 'react-router-dom';
import AdminUserPageAccountForgotPassword from '../../Page/Account/ForgotPassword';

class AdminUserRouteAccountForgotPassword extends React.Component {
    render() {
        return (
            <Route path="/user/account/forgotpassword" exact>
                <AdminUserPageAccountForgotPassword />
            </Route>
        );
    }
}

export default AdminUserRouteAccountForgotPassword;