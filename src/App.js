import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Account from './app/code/GSM/Customer/Block/Account';
import Grid from './app/code/GSM/Customer/Block/AccountGrid';
import {Container, Row, Col} from './app/code/GSM/Bootstrap/Block/Bootstrap';
import customerConfig from './app/code/GSM/Customer/config/grid';
let {rows, header} = customerConfig;
function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg="4">
            <Account message="Start learning Reactjs" />
          </Col>
          <Col lg="4">
            <Account message="ReactJs is easy" type="danger" />
          </Col>
          <Col lg="4">
            <Account message="It funny but from fb" type="warning" />
          </Col>
        </Row>
      </Container>
      <Grid rows={rows} header={header} />
    </div>
  );
}

export default App;
