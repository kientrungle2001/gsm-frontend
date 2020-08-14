import React from 'react';
import { Route } from 'react-router-dom';
import AdminCustomerPageAttributeEducation from '../../Page/Attribute/Education';

class AdminCustomerRouteAttributeEducation extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/education" exact>
                <AdminCustomerPageAttributeEducation />
            </Route>
        );
    }
}

export default AdminCustomerRouteAttributeEducation;