import React from 'react';
import 'Organization/web/style.scss';
import Pagination from 'Pagination/Block/Pagination';
import Modal from 'Modal/Block/Modal';
import Grid from 'Grid/Block/Grid';
import CellModal from 'Grid/Block/Cell/Modal';
import CellNumeric from 'Grid/Block/Cell/Numeric';
import CellTree from 'Grid/Block/Cell/Tree';
import TwoColumns from 'Layout/Block/TwoColumns';
import Actions from 'Organization/Block/Index/Actions';
import SearchForm from 'Organization/Block/Index/SearchForm';

class GSMOrganizationPageIndex extends React.Component {
	getHeaders() {
		return [
			{
				name: 'ID',
				column: 'id',
				sortable: true,
				CellComponent: CellNumeric
			},
			{
				name: 'Tên tổ chức',
				column: 'name',
				sortable: true,
				CellComponent: CellTree
			},
			{
				name: 'Phạm vi',
				column: 'parent',
				sortable: true,
			},
			{
				name: 'Thành viên',
				column: 'members',
				sortable: true,
				CellComponent: CellModal,
				action: function (row) {
					alert(row.id);
				}
			},
		];
	}
	getItems() {
		return [
			{
				id: 1,
				name: 'Tổng công ty',
				parent: '',
				type: 'Organization',
				level: 1
			},
			{
				id: 2,
				name: 'Chi nhánh 1',
				parent: 'Tổng công ty',
				type: 'Branch',
				level: 2
			},
			{
				id: 3,
				name: 'Chi nhánh 2',
				parent: 'Tổng công ty',
				type: 'Branch',
				level: 2
			}
		];
	}
	render() {
		return (
			<>
				<Modal id="toggleModal" title="Modal Dialog Title">
					<p>Modal content goes here!!!</p>
				</Modal>
				<TwoColumns rightColumnTitle="Tổ chức" leftColumnComponent={
					<SearchForm />
				} rightColumnComponent={
					<>
						<Actions />
						<Grid items={this.getItems()} headers={this.getHeaders()} />
						<Pagination />
					</>
				} />
			</>
		);
	}
}

export default GSMOrganizationPageIndex;
