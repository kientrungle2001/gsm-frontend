import React from 'react';
import {Btn} from 'Bootstrap/Block/Bootstrap';

class CommonGridBlockCellButton extends React.Component {
	render() {
		let row = this.props.row;
		let header = this.props.header;
		let BtnComponent = header.BtnComponent || Btn.Primary;
		return (
			<>
				<BtnComponent onClick={(event) => {event.preventDefault(); header.action(row)}}>{header.name}</BtnComponent>
			</>
		);
	}
}

export default CommonGridBlockCellButton;
