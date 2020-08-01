import React from 'react';
import { Route } from 'react-router-dom';
import CoreCustomerPageAttributeMarriage from '../../Page/Attribute/Marriage';

class CoreCustomerRouteAttributeMarriage extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/marriage" exact>
                <CoreCustomerPageAttributeMarriage />
            </Route>
        );
    }
}

export default CoreCustomerRouteAttributeMarriage;