import React from 'react';
import 'Organization/web/style.scss';

class CoreOrganizationPageAdminPrivilege extends React.Component {
	getItems() {
		return [
			{
				id: 1,
				name: 'Nguyễn Văn A',
				parent: '',
				organization: 'Tổng công ty',
				position: 'Tổng giám đốc',
				level: 1
			},
			{
				id: 2,
				name: 'Nguyễn Thị B',
				parent: 'Nguyễn Văn A',
				organization: 'Chi nhánh 1',
				position: 'Trưởng phòng',
				level: 2
			},
			{
				id: 3,
				name: 'Trần Văn C',
				parent: 'Nguyễn Thị B',
				organization: 'Phòng kinh doanh',
				position: 'Nhân viên',
				level: 3
			}
		];
	}
	render() {
		return (
			<>
				<div className="admin_page pt-3 pb-3">
					<div className="container-fluid">
						<div className="row">
							<div className="col-md-3">
								<div className="card">
									<div className="card-header">
										Tìm kiếm
  								</div>
									<div className="card-body">
										<form>
											<div className="form-group">
												<input className="form-control" placeholder="Tên nhân viên" />
											</div>
											<div className="form-group">
												<select className="form-control" placeholder="Phòng ban">
													<option>Phòng ban</option>
												</select>
											</div>
											<div className="form-group">
												<select className="form-control" placeholder="Chức vụ">
													<option>Chức vụ</option>
												</select>
											</div>
										</form>
									</div>
								</div>

							</div>
							<div className="col-md-9">
								<div className="card">
									<div className="card-header">
										Chức vụ
									</div>

									<div className="card-body">
										<div className="form-row align-items-center mb-3">
											<div className="col-auto">
												<select className="form-control">
													<option>Chọn hành động</option>
													<option>Gán nhân viên</option>
												</select>

											</div>
											<div className="col-auto">
												<button className="btn btn-primary">Áp dụng</button>
											</div>
											<div className="col-auto">
												<input className="form-control" placeholder="Tên nhân viên" />
											</div>
											<div className="col-auto">
												<button className="btn btn-primary">Tìm kiếm</button>
											</div>
										</div>
										<table className="table table-stripped table-bordered">
											<thead>
												<tr>
													<th>ID</th>
													<th>Phòng ban</th>
													<th>Chức vụ</th>
													<th>Quyền hạn</th>
												</tr>
											</thead>
											<tbody>
												{this.getItems().map(function (row, index) {
													return (
														<tr key={'row-' + index}>
															<td className="col-id">{row.id}</td>
															<td><a href="/">{row.organization}</a></td>
															<td><a href="/">{row.position}</a></td>
															<td>Quyền hạn</td>
														</tr>
													);
												})}

											</tbody>
										</table>
										<nav ariaLabel="Page navigation example">
											<ul className="pagination">
												<li className="page-item"><a className="page-link" href="/">|&lt;</a></li>
												<li className="page-item"><a className="page-link" href="/">&lt;&lt;</a></li>
												<li className="page-item"><a className="page-link" href="/">1</a></li>
												<li className="page-item"><a className="page-link" href="/">2</a></li>
												<li className="page-item"><a className="page-link" href="/">3</a></li>
												<li className="page-item"><a className="page-link" href="/">&gt;&gt;</a></li>
												<li className="page-item"><a className="page-link" href="/">&gt;|</a></li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default CoreOrganizationPageAdminPrivilege;