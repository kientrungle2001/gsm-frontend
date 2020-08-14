import React from 'react';
import { Route } from 'react-router-dom';
import AdminCustomerPageAttributeLocation from '../../Page/Attribute/Location';

class AdminCustomerRouteAttributeLocation extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/location" exact>
                <AdminCustomerPageAttributeLocation />
            </Route>
        );
    }
}

export default AdminCustomerRouteAttributeLocation;