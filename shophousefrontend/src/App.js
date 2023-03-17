import logo from './logo.svg';
import './App.css';
import './css/Component.css';
import './css/Element.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import NotedListHouse from './components/left/NotedListHouse';
import FriendList from './components/right/FriendList';
import DashboardMain from './components/center/DashboardMain';
import NavbarMain from './components/top/NavbarTop';
import FooterBar from './components/bottom/FooterBar';

function App() {
  return (
    <div className="App">
      <NavbarMain name="navbar-main" />
      <Row> 
        <Col sm={10}>
          <Row className="row-element h-100 w-100" style={{ marginTop: "45px" }}>
            <Col>
              <Container fluid>
                <Row className="contain-container">
                  <Col sm={2} sx={12}>
                    <NotedListHouse />
                  </Col>
                  <Col sm={10} sx={12}>
                    <DashboardMain />
                  </Col>
                </Row>
                <Col sm={12}>
                  <FooterBar />
                </Col>
              </Container>
            </Col>
          </Row >
        </Col>
        <Col sm={2} className="h-100" style={{ marginTop: "45px"}}>
          <FriendList />
        </Col>
      </Row>
    </div >
  );
}

export default App;
