import React from 'react';
import Cell from './Cell';
class CommonGridBlockItem extends React.Component {
	render() {
		let row = this.props.row;
		let headers = this.props.headers;
		return (
			<tr>
				{headers.map(function(header, index) {
					let CellComponent = header.CellComponent || Cell;
					return (
					<td key={index} className={'col-' + header.column}>
						<CellComponent row={row} header={header} />
					</td>
					);
				})}
				{/*
				<td className="col-id">{row.id}</td>
				<td className="col-name">{'|' + '____'.repeat(row.level - 1)}{row.name}</td>
				<td className="col-parent">{row.parent}</td>
				<td><a href="/" data-toggle="modal" data-target="#toggleModal">Xem thành viên</a></td>
				*/}
			</tr>
		);
	}
}

export default CommonGridBlockItem;