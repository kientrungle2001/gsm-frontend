import React from 'react';
import { Card } from 'Bootstrap/Block/Bootstrap';

class CommonCardBlockCard extends React.Component {
	render() {
		return (
			<Card>
				<Card.Header>
					{this.props.title}
				</Card.Header>
				<Card.Body>
					{this.props.children}
				</Card.Body>
			</Card>
		);
	}
}

export default CommonCardBlockCard;