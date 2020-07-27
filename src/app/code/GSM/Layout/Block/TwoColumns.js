import React from 'react';
import 'Organization/web/style.scss';
import { Container, Row, Col } from 'Bootstrap/Block/Bootstrap';
import Card from 'Common/Card/Block/Card';

class GSMLayoutBlockTwoColumns extends React.Component {
	render() {
		return (

			<div className="admin_page pt-3 pb-3">
			<Container fluid>
				<Row>
					<Col md={this.props.leftColumnSize || 3}>
						<Card title={this.props.leftColumnTitle || "Tìm kiếm"}>
							{this.props.leftColumnComponent}
						</Card>
					</Col>
					<Col md={this.props.rightColumnSize || 9}>
						<Card title={this.props.rightColumnTitle}>
							{this.props.rightColumnComponent}
						</Card>
					</Col>
				</Row>
			</Container>
		</div>

		);
	}
}

export default GSMLayoutBlockTwoColumns;