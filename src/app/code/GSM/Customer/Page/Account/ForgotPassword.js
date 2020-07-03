import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../web/style.scss';
import { Link } from 'react-router-dom';

class GSMCustomerPageAccountForgotPassword extends React.Component {
	render() {
		return (
			<>
				<div className="container mt-5">
					<div className="d-flex justify-content-center h-100">
						<div className="card">
							<div className="card-header">
								<h3>Quên mật khẩu</h3>
								<div className="d-flex justify-content-end social_icon">
									<span> <FontAwesomeIcon icon={faUser} /></span>
								</div>
							</div>
							<div className="card-body">
								<form>
									<div className="input-group form-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
										</div>
										<input type="text" className="form-control" placeholder="Tên đăng nhập" />

									</div>
									<div className="form-group">
										<input type="submit" value="Gửi" className="btn float-right login_btn" />
									</div>
								</form>
							</div>
							<div className="card-footer">
								<div className="d-flex justify-content-center links">
									Chưa có tài khoản? <Link to="/customer/account/register">Đăng ký</Link>
								</div>
								<div className="d-flex justify-content-center">
									<Link to="/customer/account/login">Đăng nhập</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default GSMCustomerPageAccountForgotPassword;