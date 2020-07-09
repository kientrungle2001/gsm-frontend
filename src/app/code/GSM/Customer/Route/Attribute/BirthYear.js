import React from 'react';
import { Route } from 'react-router-dom';
import GSMCustomerPageAttributeBirthYear from '../../Page/Attribute/BirthYear';

class GSMCustomerRouteAttributeBirthYear extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/birthyear" exact>
                <GSMCustomerPageAttributeBirthYear />
            </Route>
        );
    }
}

export default GSMCustomerRouteAttributeBirthYear;