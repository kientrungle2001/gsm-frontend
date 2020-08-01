import React from 'react';
import AttributeBirthYearRoute from './Attribute/BirthYear';
import AttributeEducationRoute from './Attribute/Education';
import AttributeGenderRoute from './Attribute/Gender';
import AttributeHeightRoute from './Attribute/Height';
import AttributeLocationRoute from './Attribute/Location';
import AttributeMarriageRoute from './Attribute/Marriage';
import AttributeSpecializationRoute from './Attribute/Specialization';

class CoreCustomerRouteCustomer extends React.Component {
	render() {
		return (
			<>
				<AttributeBirthYearRoute />
				<AttributeEducationRoute />
				<AttributeGenderRoute />
				<AttributeHeightRoute />
				<AttributeLocationRoute />
				<AttributeMarriageRoute />
				<AttributeSpecializationRoute />
			</>
		)

	}
}

export default CoreCustomerRouteCustomer;