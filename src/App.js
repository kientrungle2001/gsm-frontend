import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Container, Row, Col } from './app/code/GSM/Bootstrap/Block/Bootstrap';
import Navbar from './app/code/GSM/Menu/Block/Navbar';
import Menu from './app/code/GSM/Menu/Block/Menu';
import Account from './app/code/GSM/Customer/Block/Account';
import Grid from './app/code/GSM/Customer/Block/AccountGrid';

import customerConfig from './app/code/GSM/Customer/config/grid';
import menuConfig from './app/code/GSM/Menu/config/menu';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import $ from 'jquery';

let { rows, header } = customerConfig;
let {mainMenu} = menuConfig;
function App() {
  return (
    <Router>
      <div>
        <Navbar brand_name="GSM">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <Menu items={mainMenu} className="navbar-nav mr-auto" level={0} />
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
          <Route path="/">
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
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
  }
  var $subMenu = $(this).next('.dropdown-menu');
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass('show');
  });


  return false;
});

export default App;
