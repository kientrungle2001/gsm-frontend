import React from 'react';

class SmartCustomerBlockAccountGrid extends React.Component {
	render() {
		let {rows, header} = this.props;
		return <div className="mt-3">
			<table className="table table-dark">
				<thead>
					<tr>
						{header.map(function(col, index) {
							return (<td key={"col-index-" + index}>{col.name}</td>);
						})}
					</tr>
				</thead>
				<tbody>
						{rows.forEach(function(row, rowIndex) {
							return (
								<tr key={"row-index-" + rowIndex}>

								</tr>
							);
						})}
				</tbody>
			</table>
		</div>;
	}
}

export default SmartCustomerBlockAccountGrid;