import React from 'react';
import { Route } from 'react-router-dom';
import GSMCustomerPageAttributeGender from '../../Page/Attribute/Gender';

class GSMCustomerRouteAttributeGender extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/gender" exact>
                <GSMCustomerPageAttributeGender />
            </Route>
        );
    }
}

export default GSMCustomerRouteAttributeGender;