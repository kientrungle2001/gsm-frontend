import React from 'react';
import CommonGridBlockHeader from './Header';
import CommonGridBlockItem from './Item';

class CommonGridBlockGrid extends React.Component {
	render() {
		let Header = this.props.headerComponent || CommonGridBlockHeader;
		let Item = this.props.itemComponent || CommonGridBlockItem;
		let that = this;
		return (
			<table className="table table-stripped table-bordered">
				<thead>
					<Header headers={this.props.headers} />
				</thead>
				<tbody>
					{this.props.items && this.props.items.map(function (row, index) {
						return (
							<Item row={row} key={index} headers={that.props.headers} />
						);
					})}

				</tbody>
			</table>
		);
	}
}

export default CommonGridBlockGrid;