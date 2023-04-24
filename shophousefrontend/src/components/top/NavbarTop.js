import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
function NavbarMain() {
    return (
        <Navbar bg="dark" id="top-bar" variant='dark'>
            <Row style={{ width: "100%" }}>
                <Col sm={10}>
                    <Container fluid>
                        <Row>
                            <Col sm={2} bg="dark">
                                <Navbar.Brand style={{ color: "red" }} href="#home" >React-Bootstrap</Navbar.Brand>
                            </Col>
                            <Col sm={10} bg="dark">
                                <Navbar.Toggle style={{ color: "red" }} aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse style={{ color: "red" }} id="basic-navbar-nav" bg="dark">
                                    <Nav className="me-auto" style={{ color: "red" }}>
                                        <NavDropdown title={
                                            <span className="text-primary my-auto">User</span>
                                        } id="user-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Money</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Status</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title={
                                            <span className="text-primary my-auto">Workspace</span>
                                        } id="workspace-dropdown" bg="light">
                                            <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">House List</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Finance</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title={
                                            <span className="text-primary my-auto">Games</span>
                                        } id="workspace-dropdown" bg="light">
                                            <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">House List</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Finance</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                </Navbar.Collapse>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col sm={2} bg="dark">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Login</Button>
                    </Form>
                </Col>
            </Row>
        </Navbar >
    );
}

export default NavbarMain;
