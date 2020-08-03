import React from 'react';
import 'Organization/web/style.scss';
import { Col, Form, Btn } from 'Bootstrap/Block/Bootstrap';
class CoreOrganizationBlocIndexActions extends React.Component {
	render() {
		return (
			<Form.Row align-items-center mb-3>
				<Col.Auto>
					<Form.Control type="select">
						<option>Chọn hành động</option>
						<option>Gán nhân viên</option>
					</Form.Control>
				</Col.Auto>
				<Col.Auto>
					<Btn.Primary>Áp dụng</Btn.Primary>
				</Col.Auto>
			</Form.Row>
		)
	}
}

export default CoreOrganizationBlocIndexActions;