import React from 'react';
import { Route } from 'react-router-dom';
import CoreCustomerPageAttributeBirthYear from '../../Page/Attribute/BirthYear';

class CoreCustomerRouteAttributeBirthYear extends React.Component {
    render() {
        return (
            <Route path="/customer/attribute/birthyear" exact>
                <CoreCustomerPageAttributeBirthYear />
            </Route>
        );
    }
}

export default CoreCustomerRouteAttributeBirthYear;