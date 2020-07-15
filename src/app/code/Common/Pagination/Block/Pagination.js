import React from 'react';
import {Pagination} from '../../../GSM/Bootstrap/Block/Bootstrap';

class CommonPaginationBlockPagination extends React.Component {
	render() {
		return (
			<Pagination>
				<Pagination.Item><Pagination.Item.Link href="/">|&lt;</Pagination.Item.Link></Pagination.Item>
				<Pagination.Item><Pagination.Item.Link href="/">&lt;&lt;</Pagination.Item.Link></Pagination.Item>
				<Pagination.Item><Pagination.Item.Link href="/">1</Pagination.Item.Link></Pagination.Item>
				<Pagination.Item><Pagination.Item.Link href="/">2</Pagination.Item.Link></Pagination.Item>
				<Pagination.Item><Pagination.Item.Link href="/">3</Pagination.Item.Link></Pagination.Item>
				<Pagination.Item><Pagination.Item.Link href="/">&gt;&gt;</Pagination.Item.Link></Pagination.Item>
				<Pagination.Item><Pagination.Item.Link href="/">&gt;|</Pagination.Item.Link></Pagination.Item>
			</Pagination>
		);
	}
}

export default CommonPaginationBlockPagination;