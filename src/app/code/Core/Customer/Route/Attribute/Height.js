import React from 'react';
import { Route } from 'react-router-dom';
import CoreCustomerPageAttributeHeight from '../../Page/Attribute/Height';

class CoreCustomerRouteAttributeHeight extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/height" exact>
                <CoreCustomerPageAttributeHeight />
            </Route>
        );
    }
}

export default CoreCustomerRouteAttributeHeight;