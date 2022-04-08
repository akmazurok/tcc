import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Button, Container, Form, Nav } from 'react-bootstrap';
import './styles.css';
import login from "../../img/login.jpg";
import CpfCnpj from '../../components/Masks/CpfCnpj';
import { AuthContext } from '../../context/AuthContext';

/*
    - funcao para verificar CPF e CNPJ
    - mensagem de erro - CPF inválido / CNPJ inválido
    - botao que chama função login
    - mensagem de erro no login

*/


const LoginScreen = () => {
    const [cpfCnpj, setCpfCnpj] = useState("");
    const [password, setPassword] = useState("");
     // eslint-disable-next-line
    const { signIn } = useContext(AuthContext);
    

    //Quando menu estiver ok, redirecionar diretamente para a página inicial de usuário
    /*   useEffect(() => {
        tryLocalSignIn();

    }, []); */

    return (
        <Container>
            <div className="margin d-none d-lg-block d-xl-nonel"></div>
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
                                type="cad"
                                value={cpfCnpj}
                                onChange={(ev) => {
                                    setCpfCnpj(ev.target.value);
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="loginPassword">
                            <Form.Label>Senha:</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Digite a sua senha:"
                                value={password}
                                onChange={(ev) => {
                                    setPassword(ev.target.value);
                                }}
                             
                            />
                        </Form.Group>

                        <Nav className="flex-column">
                            <Nav.Link as={Link} to="/redefinirsenha">Esqueceu a senha?</Nav.Link>
                            <Nav.Link as={Link} to="/cadastro">Não tenho cadastro</Nav.Link>
                        </Nav>
                        <Button  
                        onClick={() => { signIn({ cpfCnpj, password }) }} 
                        variant="primary">
                            Entrar
                        </Button>


                        {/*      <Button as={Link} to="/estudante" variant="primary">
                            Entrar
                        </Button> */}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginScreen;
