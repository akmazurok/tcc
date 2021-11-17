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
                            <Navbar.Brand href="/estudante">Painel do Estudante</Navbar.Brand>
                            <Navbar.Toggle
                                aria-controls="responsive-navbar-nav" />
                        </Row>
                        <Row>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav defaultActiveKey="/estudante" className="flex-column">
                                    <Nav.Link as={Link} to="/estudante/perfil">Meu perfil</Nav.Link>
                                    <Nav.Link as={Link} to="/estudante/vagas">Pesquisar Vagas</Nav.Link>
                                    <Nav.Link as={Link} to="/estudante/listarincricoes">Minhas inscrições</Nav.Link>
                                    <Nav.Link as={Link} to="/estudante/certificados">Certificados</Nav.Link>

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