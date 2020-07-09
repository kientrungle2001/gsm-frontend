import React from 'react';
import { Route } from 'react-router-dom';
import GSMCustomerPageAttributeEducation from '../../Page/Attribute/Education';

class GSMCustomerRouteAttributeEducation extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/education" exact>
                <GSMCustomerPageAttributeEducation />
            </Route>
        );
    }
}

export default GSMCustomerRouteAttributeEducation;