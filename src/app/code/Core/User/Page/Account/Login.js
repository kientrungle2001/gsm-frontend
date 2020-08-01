import React from 'react';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../web/style.scss';
import { Link } from 'react-router-dom';
import AccountManagement from '../../Model/AccountManagement';
import {Container, Row, Card, Display, Text, Form, Input} from '../../../Bootstrap/Block/Bootstrap';

class CoreUserPageAccountLogin extends React.Component {
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
					<Container mt-5 className="hello" fluid>
						<Display.Flex justify-content-center h-100>
							<Card>
								<Card.Header>
									<h3>Đăng nhập</h3>
									<Display.Flex justify-content-end social_icon>
										<span> <FontAwesomeIcon icon={faUser} /></span>
									</Display.Flex>
								</Card.Header>
								<Card.Body>
									{this.state && this.state.message ? (
										<Text.Center mb-3>
											<Text.Danger>{this.state.message}</Text.Danger>
										</Text.Center>
									) : ''}
									<form onSubmit={this.login}>
										<Form.Group input-group>
											<Input.Group.Prepend>
												<Input.Group.Text><FontAwesomeIcon icon={faUser} /></Input.Group.Text>
											</Input.Group.Prepend>
											<Form.Control placeholder="Email" ref={this.emailRef} />
										</Form.Group>
										<Form.Group input-group>
											<Input.Group.Prepend>
												<Input.Group.Text><FontAwesomeIcon icon={faKey} /></Input.Group.Text>
											</Input.Group.Prepend>
											<Form.Control type="password" placeholder="Mật khẩu" ref={this.passwordRef} />
										</Form.Group>
										<Row align-items-center remember>
											<Input type="checkbox" /> Nhớ đăng nhập
										</Row>

										<Form.Group>
											<Input type="submit" value="Đăng nhập" btn float-right login_btn />
										</Form.Group>
									</form>
								</Card.Body>
								<Card.Footer>
									<Display.Flex justify-content-center links>
										Chưa có tài khoản? <Link to="/user/account/register">Đăng ký</Link>
									</Display.Flex>
									<Display.Flex justify-content-center>
										<Link to="/user/account/forgotpassword">Quên mật khẩu?</Link>
									</Display.Flex>
								</Card.Footer>
							</Card>
						</Display.Flex>
					</Container>
				</div>
			</>
		);
	}
}

export default CoreUserPageAccountLogin;