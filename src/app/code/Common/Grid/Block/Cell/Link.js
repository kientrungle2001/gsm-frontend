import React from 'react';
import {Link} from 'react-router-dom';

class CommonGridBlockCellLink extends React.Component {
	render() {
		let row = this.props.row;
		let header = this.props.header;
		let onClickFunc = header.action ? (evt) => { evt.preventDefault(); header.action(row) } : null;
		let href = header.href || '#link';
		if (typeof href === 'function') {
			href = href(row);
		}
		let type = header.type;
		if(type === CommonGridBlockCellLink.TYPE_ANCHOR) {
			return (
				<>
					<a href={href} onClick={onClickFunc}>{header.name}</a>
				</>
			);
		}

		return (
			<>
				<Link to={href} onClick={onClickFunc}>{header.name}</Link>
			</>
		);
		
	}
}

CommonGridBlockCellLink.TYPE_ANCHOR = 'anchor';
CommonGridBlockCellLink.TYPE_LINK = 'link';

export default CommonGridBlockCellLink;