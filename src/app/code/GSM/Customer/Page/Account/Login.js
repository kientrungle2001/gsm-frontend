import React from 'react';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../web/style.scss';
import { Link } from 'react-router-dom';
import AccountManagement from '../../Model/AccountManagement';

class GSMCustomerPageAccountLogin extends React.Component {
	constructor(props) {
		super(props);
		this.emailRef = React.createRef();
		this.passwordRef = React.createRef();
		this.login = this.login.bind(this);
	}
	login(e) {
		e.preventDefault();
		AccountManagement.login(this.emailRef.value, this.passwordRef.value).catch(function(err) {
			console.log(err.status);
			console.log(err.message);
		});
		return false;
	}
	render() {
		return (
			<>
				<div className="container mt-5">
					<div className="d-flex justify-content-center h-100">
						<div className="card">
							<div className="card-header">
								<h3>Đăng nhập</h3>
								<div className="d-flex justify-content-end social_icon">
									<span> <FontAwesomeIcon icon={faUser} /></span>
								</div>
							</div>
							<div className="card-body">
								<form onSubmit={this.login}>
									<div className="input-group form-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
										</div>
										<input type="text" className="form-control" placeholder="Email" ref={this.emailRef} />

									</div>
									<div className="input-group form-group">
										<div className="input-group-prepend">
											<span className="input-group-text"><FontAwesomeIcon icon={faKey} /></span>
										</div>
										<input type="password" className="form-control" placeholder="Mật khẩu" ref={this.passwordRef} />
									</div>
									<div className="row align-items-center remember">
										<input type="checkbox" /> Nhớ đăng nhập
					</div>
									<div className="form-group">
										<input type="submit" value="Đăng nhập" className="btn float-right login_btn" />
									</div>
								</form>
							</div>
							<div className="card-footer">
								<div className="d-flex justify-content-center links">
									Chưa có tài khoản? <Link to="/customer/account/register">Đăng ký</Link>
								</div>
								<div className="d-flex justify-content-center">
									<Link to="/customer/account/forgotpassword">Quên mật khẩu?</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default GSMCustomerPageAccountLogin;