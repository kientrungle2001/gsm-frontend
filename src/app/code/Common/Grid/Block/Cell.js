import React from 'react';

class CommonGridBlockCell extends React.Component {
	render() {
		let row = this.props.row;
		let header = this.props.header;
		return (
			<>
				<span>{row[header.column]}</span>
			</>
		);
	}
}

export default CommonGridBlockCell;