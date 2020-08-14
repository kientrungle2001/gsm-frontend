import React from 'react';
import 'Organization/web/style.scss';
import { Form } from 'Bootstrap/Block/Bootstrap';
class AdminOrganizationBlockIndexSearchForm extends React.Component {
	render() {
		return (
			<form>
				<Form.Group.Control placeholder="Tên tổ chức" />
				<Form.Group.Control type="select" placeholder="Phạm vi">
					<option>Phạm vi</option>
				</Form.Group.Control>
			</form>
		);
	}
}

export default AdminOrganizationBlockIndexSearchForm;
