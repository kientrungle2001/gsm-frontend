import React from 'react';
import { Route } from 'react-router-dom';
import AdminCustomerPageAttributeGender from '../../Page/Attribute/Gender';

class AdminCustomerRouteAttributeGender extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/gender" exact>
                <AdminCustomerPageAttributeGender />
            </Route>
        );
    }
}

export default AdminCustomerRouteAttributeGender;