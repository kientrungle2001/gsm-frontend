import React from 'react';
import {Pagination} from 'Bootstrap/Block/Bootstrap';

class CommonPaginationBlockPagination extends React.Component {
	getPageList(pages, currentPage) {
		let pageList = [];
		for(let i = 0; i < pages; i++) {
			if(i === 0 || i === pages - 1 || (i <= currentPage + 4 && i >= currentPage - 4)) {
				pageList.push(i);
			}
		}
		return pageList;
	}
	render() {
		let total = this.props.total;
		let pageSize = this.props.pageSize;
		let currentPage = this.props.currentPage || 0;
		let pages = Math.ceil(total / pageSize);
		let pageList = this.getPageList(pages, currentPage);
		return (
			<nav aria-label="Page navigation">
				<Pagination>
					<Pagination.Item><Pagination.Item.Link href="/"  onClick={(evt) => {evt.preventDefault(); this.props.onChange(0);}}>|&lt;</Pagination.Item.Link></Pagination.Item>
					<Pagination.Item><Pagination.Item.Link href="/" onClick={(evt) => {evt.preventDefault(); this.props.onChange(currentPage - 1 >= 0 ? currentPage - 1: 0);}}>&lt;&lt;</Pagination.Item.Link></Pagination.Item>
					{pageList.map((page, index) => {
						return (
							<Pagination.Item key={index} active={page === currentPage}><Pagination.Item.Link href="/" onClick={(evt) => {
								evt.preventDefault();
								this.props.onChange(page);
							}}>{page + 1}</Pagination.Item.Link></Pagination.Item>
						);
					})}
					<Pagination.Item><Pagination.Item.Link href="/" onClick={(evt) => {evt.preventDefault(); this.props.onChange(currentPage + 1 < pages ? currentPage + 1: pages-1);}}>&gt;&gt;</Pagination.Item.Link></Pagination.Item>
					<Pagination.Item><Pagination.Item.Link href="/" onClick={(evt) => {evt.preventDefault(); this.props.onChange(pages);}}>&gt;|</Pagination.Item.Link></Pagination.Item>
				</Pagination>
			</nav>
		);
	}
}

export default CommonPaginationBlockPagination;