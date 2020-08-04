import React from 'react';
import 'Organization/web/style.scss';
import Pagination from 'Pagination/Block/Pagination';
import Modal from 'Modal/Block/Modal';
import Grid from 'Grid/Block/Grid';
import TwoColumns from 'Layout/Block/TwoColumns';
import Actions from 'Organization/Block/Index/Actions';
import SearchForm from 'Grid/Block/SearchForm';
import Axios from 'axios';

class CommonGridPageGrid extends React.Component {
	url = 'http://api2.nextnobels.com/coreusers';
	getTitle() {
		return 'Tổ chức';
	}
	getSearchForm() {
		return SearchForm;
	}
	getActionForm() {
		return Actions;
	}
	getHeaders() {
		return [];
	}
	getFilters() {
		return [];
	}
	getActions() {
		return [];
	}
	componentWillMount() {
		this.loadItems();
	}
	loadItems() {
		Axios.get(this.url, {
			params: {
				sort: this.getStateParam('orderBy', 'id desc'),
				limit: this.getStateParam('pageSize', 30),
				skip: this.getStateParam('pageSize', 30)
					* this.getStateParam('currentPage', 0)
			}
		}).then((resp) => {
			this.setStateParams({
				items: resp.data,
				total: 30000
			});
		});
	}

	delItem(id) {
		Axios.delete(this.url + '/' + id).then((resp) => {
			this.loadItems();
		});
	}

	changePage(page) {
		this.setStateParams({ currentPage: page });
		this.loadItems();
	}

	setStateParams(params) {
		let { state } = this;
		state = state ? state : {};
		for (let k in params) {
			state[k] = params[k];
		}
		this.setState(state);
	}
	getStateParam(k, d = null) {
		let { state } = this;
		state = state ? state : {};
		if (typeof state[k] !== 'undefined') return state[k];
		return d;
	}
	render() {
		let SearchFormObj = this.getSearchForm();
		let ActionFormObj = this.getActionForm();
		return (
			<>
				<Modal id="toggleModal" title="Modal Dialog Title">
					<p>Modal content goes here!!!</p>
				</Modal>
				<TwoColumns rightColumnTitle={this.getTitle()} leftColumnComponent={
					<SearchFormObj filters={this.getFilters()} />
				} rightColumnComponent={
					<>
						<ActionFormObj actions={this.getActions()} />
						<Grid items={this.getStateParam('items', [])} headers={this.getHeaders()} />
						<Pagination total={this.getStateParam('total', 0)} 
							pageSize={this.getStateParam('pageSize', 30)} 
							currentPage={this.getStateParam('currentPage', 0)} 
							onChange={(page) => {
								this.setStateParams({currentPage: page});
								this.loadItems();
							}} />
					</>
				} />
			</>
		);
	}
}

export default CommonGridPageGrid;
