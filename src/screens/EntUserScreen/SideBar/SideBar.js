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
                            <Navbar.Brand href="/entidade">Painel da Entidade</Navbar.Brand>
                            <Navbar.Toggle
                                aria-controls="responsive-navbar-nav" />
                        </Row>
                        <Row>
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav defaultActiveKey="/entidade" className="flex-column">
                                    <Nav.Link as={Link} to="/">Meu perfil</Nav.Link>
                                    <Nav.Link as={Link} to="/cadastrarvaga">Cadastrar Vaga</Nav.Link>
                                    <Nav.Link eventKey="/listar_vagas">Vagas cadastradas</Nav.Link>
                                    <Nav.Link eventKey="/listar_inscricoes">Ver inscrições</Nav.Link>

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