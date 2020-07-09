import React from 'react';
import { Route } from 'react-router-dom';
import GSMCustomerPageAttributeMarriage from '../../Page/Attribute/Marriage';

class GSMCustomerRouteAttributeMarriage extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/marriage" exact>
                <GSMCustomerPageAttributeMarriage />
            </Route>
        );
    }
}

export default GSMCustomerRouteAttributeMarriage;