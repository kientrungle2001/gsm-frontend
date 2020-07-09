import React from 'react';
import { Route } from 'react-router-dom';
import GSMCustomerPageAttributeHeight from '../../Page/Attribute/Height';

class GSMCustomerRouteAttributeHeight extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/height" exact>
                <GSMCustomerPageAttributeHeight />
            </Route>
        );
    }
}

export default GSMCustomerRouteAttributeHeight;