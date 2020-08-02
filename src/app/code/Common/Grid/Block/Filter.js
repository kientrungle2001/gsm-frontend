import React from 'react';
import { Form } from 'Bootstrap/Block/Bootstrap';
class CommonGridBlockFilter extends React.Component {
	loadOptions() {
		
	}
	componentWillMount() {
		this.loadOptions();
	}
	render() {
		let filter = this.props.filter;
		let FilterComponent = filter.FilterComponent || null;
		return (
			<>
			{FilterComponent ? <FilterComponent filter={filter} /> : (
				<Form.Group.Control type="select" placeholder={filter.title} onChange={filter.onChange}>
					<option value={null}>{filter.title}</option>
					{filter.options.map((option, index) => {
						return (<option key={index} value={option.value}>{option.label}</option>)
					})}
				</Form.Group.Control>
			)}
			</>
		);
	}
}

export default CommonGridBlockFilter;