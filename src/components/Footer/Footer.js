import React from 'react';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import './styles.css';

const Footer = () => {
    return (
        <div className="footer">
   
            <Nav className="flex-colunm">
                <Nav.Link as={Link} to="">Home</Nav.Link>
                <Nav.Link as={Link} to="login">Login</Nav.Link>
                <Nav.Link as={Link} to="cadastro">Cadastro</Nav.Link>
                <Nav.Link as={Link} to="entidade">Tela Entidade</Nav.Link>
            </Nav>
        </div>
    )
}

export default Footer;
