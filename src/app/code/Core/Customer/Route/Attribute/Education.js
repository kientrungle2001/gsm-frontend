import React from 'react';
import { Route } from 'react-router-dom';
import CoreCustomerPageAttributeEducation from '../../Page/Attribute/Education';

class CoreCustomerRouteAttributeEducation extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/education" exact>
                <CoreCustomerPageAttributeEducation />
            </Route>
        );
    }
}

export default CoreCustomerRouteAttributeEducation;