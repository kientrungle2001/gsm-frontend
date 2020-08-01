import React from 'react';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../web/style.scss';
import { Link } from 'react-router-dom';
import {Container, Display, Card, Form, Input} from 'Bootstrap/Block/Bootstrap';

class CoreUserPageAccountRegister extends React.Component {
    render() {
        return (
            <>
                <div className="account_page">
                    <Container mt-5>
                        <Display.Flex justify-content-center h-100>
                            <Card>
                                <Card.Header>
                                    <h3>Đăng ký</h3>
                                    <Display.Flex justify-content-end social_icon>
                                        <span> <FontAwesomeIcon icon={faUser} /></span>
                                    </Display.Flex>
                                </Card.Header>
                                <Card.Body>
                                    <form>
                                        <Form.Group input-group>
                                            <Input.Group.Prepend>
                                                <Input.Group.Text><FontAwesomeIcon icon={faUser} /></Input.Group.Text>
                                            </Input.Group.Prepend>
                                            <Form.Control placeholder="Email" />

                                        </Form.Group>
                                        <Form.Group input-group>
                                            <Input.Group.Prepend>
                                                <Input.Group.Text><FontAwesomeIcon icon={faKey} /></Input.Group.Text>
                                            </Input.Group.Prepend>
                                            <Form.Control type="password" placeholder="Mật khẩu" />
                                        </Form.Group>
                                        <Form.Group input-group>
                                            <Input.Group.Prepend>
                                                <Input.Group.Text><FontAwesomeIcon icon={faKey} /></Input.Group.Text>
                                            </Input.Group.Prepend>
                                            <Form.Control type="password" placeholder="Nhập lại mật khẩu" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Input type="submit" value="Đăng ký" btn float-right login_btn />
                                        </Form.Group>
                                    </form>
                                </Card.Body>
                                <Card.Footer>
                                    <Display.Flex justify-content-center links>
                                        Đã có tài khoản? <Link to="/user/account/login">Đăng nhập</Link>
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

export default CoreUserPageAccountRegister;