import React from 'react';
import { Route } from 'react-router-dom';
import GSMCustomerPageAttributeSpecialization from '../../Page/Attribute/Specialization';

class GSMCustomerRouteAttributeSpecialization extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/specialization" exact>
                <GSMCustomerPageAttributeSpecialization />
            </Route>
        );
    }
}

export default GSMCustomerRouteAttributeSpecialization;