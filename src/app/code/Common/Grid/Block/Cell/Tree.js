import React from 'react';

class CommonGridBlockCellTree extends React.Component {
	render() {
		let row = this.props.row;
		let header = this.props.header;
		return (
			<>
				{'|____'.repeat(row.level-1)}{row[header.column]}
			</>
		);
	}
}

export default CommonGridBlockCellTree;
