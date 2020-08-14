import React from 'react';
import { Route } from 'react-router-dom';
import AdminCustomerPageAttributeMarriage from '../../Page/Attribute/Marriage';

class AdminCustomerRouteAttributeMarriage extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/marriage" exact>
                <AdminCustomerPageAttributeMarriage />
            </Route>
        );
    }
}

export default AdminCustomerRouteAttributeMarriage;