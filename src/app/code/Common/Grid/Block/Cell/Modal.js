import React from 'react';

class CommonGridBlockCellModal extends React.Component {
	render() {
		let row = this.props.row;
		let header = this.props.header;
		return (
			<>
				<a href="#modal" onClick={(evt) => {evt.preventDefault(); header.action(row)}}>{header.name}</a>
			</>
		);
	}
}

export default CommonGridBlockCellModal;