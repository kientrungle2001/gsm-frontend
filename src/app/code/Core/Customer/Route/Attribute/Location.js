import React from 'react';
import { Route } from 'react-router-dom';
import CoreCustomerPageAttributeLocation from '../../Page/Attribute/Location';

class CoreCustomerRouteAttributeLocation extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/location" exact>
                <CoreCustomerPageAttributeLocation />
            </Route>
        );
    }
}

export default CoreCustomerRouteAttributeLocation;