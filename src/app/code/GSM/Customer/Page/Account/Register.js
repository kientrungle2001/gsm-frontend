import React from 'react';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../web/style.css';
import { Link } from 'react-router-dom';

class GSMCustomerPageAccountRegister extends React.Component {
    render() {
        return (
            <>
                <div className="container mt-5">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card">
                            <div className="card-header">
                                <h3>Đăng ký</h3>
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
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><FontAwesomeIcon icon={faKey} /></span>
                                        </div>
                                        <input type="password" className="form-control" placeholder="Mật khẩu" />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Đăng ký" className="btn float-right login_btn" />
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center links">
                                    Đã có tài khoản? <Link to="/customer/account/login">Đăng nhập</Link>
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

export default GSMCustomerPageAccountRegister;