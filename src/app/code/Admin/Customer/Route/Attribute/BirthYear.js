import React from 'react';
import { Route } from 'react-router-dom';
import AdminCustomerPageAttributeBirthYear from '../../Page/Attribute/BirthYear';

class AdminCustomerRouteAttributeBirthYear extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/birthyear" exact>
                <AdminCustomerPageAttributeBirthYear />
            </Route>
        );
    }
}

export default AdminCustomerRouteAttributeBirthYear;