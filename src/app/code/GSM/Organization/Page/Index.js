import React from 'react';
import 'Organization/web/style.scss';
import { Container, Row, Col, Card, Display, Text, Form, Input, Modal, Btn, Pagination } from 'Bootstrap/Block/Bootstrap';
import CommonPagination from 'Common/Pagination/Block/Pagination';
import CommonModal from 'Common/Modal/Block/Modal';
import CommonCard from 'Common/Card/Block/Card';

class GSMOrganizationPageIndex extends React.Component {
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
				<CommonModal id="toggleModal" title="Modal Dialog Title">
					<p>Modal content goes here!!!</p>
				</CommonModal>
				<div className="admin_page pt-3 pb-3">
					<Container fluid>
						<Row>
							<Col md="3">
								<CommonCard title="Tìm kiếm">
									<form>
										<Form.Group.Control placeholder="Tên tổ chức" />
										<Form.Group.Control type="select" placeholder="Phạm vi">
											<option>Phạm vi</option>
										</Form.Group.Control>
									</form>
								</CommonCard>
							</Col>
							<Col md="9">
								<CommonCard title="Tổ chức">
									<Form.Row align-items-center mb-3>
										<Col.Auto>
											<Form.Control type="select">
												<option>Chọn hành động</option>
												<option>Gán nhân viên</option>
											</Form.Control>
										</Col.Auto>
										<Col.Auto>
											<Btn.Primary>Áp dụng</Btn.Primary>
										</Col.Auto>
										<Col.Auto>
											<Form.Control placeholder="Tên tổ chức" />
										</Col.Auto>
										<Col.Auto>
											<Btn.Primary onClick={event => {alert('Search')}}>Tìm kiếm</Btn.Primary>
										</Col.Auto>
									</Form.Row>
									<table className="table table-stripped table-bordered">
										<thead>
											<tr>
												<th>ID</th>
												<th>Tên tổ chức</th>
												<th>Phạm vi</th>
												<th>Thành viên</th>
											</tr>
										</thead>
										<tbody>
											{this.getItems().map(function (row, index) {
												return (
													<tr key={'row-' + index}>
														<td className="col-id">{row.id}</td>
														<td className="col-name">{'|' + '____'.repeat(row.level - 1)}{row.name}</td>
														<td className="col-parent">{row.parent}</td>
														<td><a href="#" data-toggle="modal" data-target="#toggleModal">Xem thành viên</a></td>
													</tr>
												);
											})}

										</tbody>
									</table>
									<nav aria-label="Page navigation">
										<CommonPagination />
									</nav>
								</CommonCard>
							</Col>
						</Row>
					</Container>
				</div>
			</>
		);
	}
}

export default GSMOrganizationPageIndex;