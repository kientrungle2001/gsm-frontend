import React from 'react';
import { Route } from 'react-router-dom';
import CoreCustomerPageAttributeGender from '../../Page/Attribute/Gender';

class CoreCustomerRouteAttributeGender extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/gender" exact>
                <CoreCustomerPageAttributeGender />
            </Route>
        );
    }
}

export default CoreCustomerRouteAttributeGender;