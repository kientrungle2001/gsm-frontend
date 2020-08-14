import React from 'react';

class CommonGridBlockCellMultiple extends React.Component {
	render() {
		let row = this.props.row;
		let header = this.props.header;
		let elements = header.elements;
		return (
			<>
				{elements.map((elem, index) => {
					let CellComponent = elem.CellComponent;
					return (
						<React.Fragment key={index}>
							<CellComponent row={row} header={elem} />
							{header.delimiter}
						</React.Fragment>
					)
				})}
				<div className="text-right">{row[header.column]}</div>
			</>
		);
	}
}

export default CommonGridBlockCellMultiple;
