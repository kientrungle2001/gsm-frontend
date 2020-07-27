import React from 'react';
import 'Organization/web/style.scss';
import Pagination from 'Common/Pagination/Block/Pagination';
import Modal from 'Common/Modal/Block/Modal';
import Grid from 'Common/Grid/Block/Grid';
import CellModal from 'Common/Grid/Block/Cell/Modal';
import OrganizationActions from 'Organization/Block/Index/Actions';
import TwoColumns from 'GSM/Layout/Block/TwoColumns';
import OrganizationSearchForm from '../Block/Index/SearchForm';

class GSMOrganizationPageIndex extends React.Component {
	getHeaders() {
		return [
			{
				name: 'ID',
				column: 'id',
				sortable: true,
			},
			{
				name: 'Tên tổ chức',
				column: 'name',
				sortable: true,
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
					<OrganizationSearchForm />
				} rightColumnComponent={
					<>
						<OrganizationActions />
						<Grid items={this.getItems()} headers={this.getHeaders()} />
						<Pagination />
					</>
				} />
			</>
		);
	}
}

export default GSMOrganizationPageIndex;