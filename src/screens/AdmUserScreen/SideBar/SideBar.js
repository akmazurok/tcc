import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './styles.css';

const SideBar = (props) => {

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Col>
                        <Row>
                            <Navbar.Brand href="/entidade">Painel do Administrador</Navbar.Brand>
                            <Navbar.Toggle
                                aria-controls="responsive-navbar-nav" />
                        </Row>
                        <Row>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav defaultActiveKey="/admin" className="flex-column">
                                    <Nav.Link as={Link} to="/admin/perfil">Meu perfil</Nav.Link>
                                    <Nav.Link as={Link} to="/admin/entidades">Listar cadastros</Nav.Link>
                                    <Nav.Link as={Link} to="/admin/vagas">Listar vagas</Nav.Link>
                                    <Nav.Link eventKey="/listarusuarios" disabled>Listar usuários</Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Row>
                    </Col>

                </Container>
            </Navbar>

        </>
    );
};

export default SideBar;