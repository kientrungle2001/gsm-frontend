import React from 'react';
import { Route } from 'react-router-dom';
import CoreCustomerPageAttributeSpecialization from '../../Page/Attribute/Specialization';

class CoreCustomerRouteAttributeSpecialization extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/specialization" exact>
                <CoreCustomerPageAttributeSpecialization />
            </Route>
        );
    }
}

export default CoreCustomerRouteAttributeSpecialization;