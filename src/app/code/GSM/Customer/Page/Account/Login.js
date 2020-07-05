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
	login(evt) {
		evt.preventDefault();
		var that = this;
		if(that.validateForm()) {
			AccountManagement.login(this.emailRef.current.value, this.passwordRef.current.value).catch(function (err) {
				that.setErrorMessage(err.message);
			}).then(function (resp) {
				if (resp) {
					that.setErrorMessage(false);
				}
			});
		}
	}
	validateForm() {
		var email = this.emailRef.current.value;
		var password = this.passwordRef.current.value;
		if(!email) {
			this.setErrorMessage('Email không được để trống');
			return false;
		}
		if (!password) {
			this.setErrorMessage('Password không được để trống');
			return false;
		}
		return true;
	}
	setErrorMessage(message) {
		var state = this.state || {};
		state.message = message;
		state.error = true;
		this.setState(state);
	}
	render() {
		return (
			<>
				<div className="account_page">
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
									{this.state && this.state.message ? (
										<div className="text-center mb-3">
											<span className="text text-danger">{this.state.message}</span>
										</div>
									) : ''}
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
				</div>
			</>
		);
	}
}

export default GSMCustomerPageAccountLogin;