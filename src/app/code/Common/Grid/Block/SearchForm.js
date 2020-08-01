import React from 'react';
import { Form } from 'Bootstrap/Block/Bootstrap';
import Filter from './Filter';
class CommonGridBlockSearchForm extends React.Component {
	render() {
		return (
			<>
				<form>
					<Form.Group.Control placeholder="Tìm kiếm" onSearch={this.props.onSearch} ref={this.props.searchRef} />
					{this.props.filters.map((filter, index) => {
						return <Filter filter={filter} key={index} />
					})}
				</form>
			</>
		);
	}
}

export default CommonGridBlockSearchForm;