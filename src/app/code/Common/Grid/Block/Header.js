import React from 'react';

class CommonGridBlockHeader extends React.Component {
	render() {
		return (
			<tr>
				{
					this.props.headers && this.props.headers.map(function (header, index) {
						return (<th key={index}>{header.name}</th>);
					})
				}
			</tr>
		);
	}
}

export default CommonGridBlockHeader;