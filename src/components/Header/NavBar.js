import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";
import './styles.css';


const NavBar = () => {
    return (
        <div className="navbar">
            <Navbar expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mx-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/login">Entidades</Nav.Link>
                            <Nav.Link as={Link} to="/login">Vagas</Nav.Link>
                            <Nav.Link as={Link} to="/login">Como funciona</Nav.Link>
                            <Nav.Link as={Link} to="/login">Sobre nos</Nav.Link>

                        </Nav>
                        <Nav>
                            <Button className="btn" as={Link} to="/login" variant="outline-secondary">
                                <FaUserAlt size={12}/>  Entrar</Button>
                            <Button className="btn" variant="outline-secondary">Cadastrar</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar;

