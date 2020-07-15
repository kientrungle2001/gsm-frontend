import React from 'react';

class CommonGridBlockGrid extends React.Component {
	render() {
		return (
			<table className="table table-stripped table-bordered">
				<thead>
					<tr>
						<th>ID</th>
						<th>Tên tổ chức</th>
						<th>Phạm vi</th>
						<th>Thành viên</th>
					</tr>
				</thead>
				<tbody>
					{this.props.items && this.props.items.map(function (row, index) {
						return (
							<tr key={'row-' + index}>
								<td className="col-id">{row.id}</td>
								<td className="col-name">{'|' + '____'.repeat(row.level - 1)}{row.name}</td>
								<td className="col-parent">{row.parent}</td>
								<td><a href="/" data-toggle="modal" data-target="#toggleModal">Xem thành viên</a></td>
							</tr>
						);
					})}

				</tbody>
			</table>
		);
	}
}

export default CommonGridBlockGrid;