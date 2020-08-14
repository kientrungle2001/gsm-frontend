import React from 'react';
import { Route } from 'react-router-dom';
import AdminCustomerPageAttributeHeight from '../../Page/Attribute/Height';

class AdminCustomerRouteAttributeHeight extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/height" exact>
                <AdminCustomerPageAttributeHeight />
            </Route>
        );
    }
}

export default AdminCustomerRouteAttributeHeight;