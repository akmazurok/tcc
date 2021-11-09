import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Container, Form, Nav } from 'react-bootstrap';
import './styles.css';
import login from "../../img/login.jpg";
import CpfCnpj from '../../components/Masks/CpfCnpj';



const LoginScreen = () => {
    const [cpfCnpj, setCpfCnpj] = useState("");
    const [mask, setMask] = useState("");

    return (
        <Container>
            <div className="main">

            </div>
            <Row>
                <Col lg={7} md={6} sm={12}>
                    <img className="image" src={login} alt="login" />
                </Col>
                <Col lg={4} md={6} sm={12} className="login">
                    <h4>Login</h4>

                    <Form className="form">
                        <Form.Group className="mb-3" controlId="loginId">
                            <Form.Label>CPF ou CPNJ:</Form.Label>
                            
                                <CpfCnpj
                                
                                placeholder="Digite um CPF ou CNPJ"
                                type="tel"
                                value={cpfCnpj}
                                onChange={(ev, type) => {
                                    setCpfCnpj(ev.target.value);
                                    setMask(type === "CPF");
                                }}
                            />
                         
                        </Form.Group>



                        <Form.Group className="mb-3" controlId="loginPassword">
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control type="password" placeholder="Digite a sua senha:" />
                        </Form.Group>
                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/resetarsenha">Esqueceu a senha?</Nav.Link>
                            <Nav.Link as={Link} to="/cadastro">Nao tenho cadastro</Nav.Link>
                        </Nav>
                        <Button variant="primary" type="submit">
                            Entrar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginScreen;
