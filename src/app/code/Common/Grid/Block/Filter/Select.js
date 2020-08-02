import React from 'react';
import { Form } from 'Bootstrap/Block/Bootstrap';
import Axios from 'axios';
class CommonGridBlockFilterSelect extends React.Component {
	loadItems() {
		let filter = this.props.filter;
		Axios.get(filter.url, {
			params: {
				...filter.params,
				sort: this.getStateParam('orderBy', (filter.params && filter.params.sort) || 'id desc'),
				limit: this.getStateParam('pageSize', (filter.params && filter.params.limit) || 30),
				skip: this.getStateParam('pageSize', (filter.params && filter.params.limit) || 30)
					* this.getStateParam('currentPage', 0)
			}
		}).then((resp) => {
			this.setStateParams({
				items: resp.data,
				total: 30000
			});
		});
	}
	componentWillMount() {
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
		let filter = this.props.filter;
		let items = this.getStateParam('items', []);
		return (
			<>
				<Form.Group.Control type="select" placeholder={filter.title} onChange={filter.onChange}>
					<option value={null}>{filter.title}</option>
					{items.map((item, index) => {
						return (<option key={index} value={item[filter.valueField]}>{item[filter.labelField]}</option>)
					})}
				</Form.Group.Control>
			</>
		);
	}
}

export default CommonGridBlockFilterSelect;