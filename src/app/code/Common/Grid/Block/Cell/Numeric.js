import React from 'react';

class CommonGridBlockCellNumeric extends React.Component {
	render() {
		let row = this.props.row;
		let header = this.props.header;
		return (
			<>
				<div className="text-right">{row[header.column]}</div>
			</>
		);
	}
}

export default CommonGridBlockCellNumeric;
