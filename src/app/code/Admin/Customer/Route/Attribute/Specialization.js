import React from 'react';
import { Route } from 'react-router-dom';
import AdminCustomerPageAttributeSpecialization from '../../Page/Attribute/Specialization';

class AdminCustomerRouteAttributeSpecialization extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/specialization" exact>
                <AdminCustomerPageAttributeSpecialization />
            </Route>
        );
    }
}

export default AdminCustomerRouteAttributeSpecialization;