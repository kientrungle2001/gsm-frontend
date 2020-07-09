import React from 'react';
import { Route } from 'react-router-dom';
import GSMCustomerPageAttributeLocation from '../../Page/Attribute/Location';

class GSMCustomerRouteAttributeLocation extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/location" exact>
                <GSMCustomerPageAttributeLocation />
            </Route>
        );
    }
}

export default GSMCustomerRouteAttributeLocation;