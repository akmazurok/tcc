import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import './styles.css';
import CpfCnpj from '../../validators/masks/CpfCnpj';

const RedefinirSenhaScreen = () => {
    const [cpfCnpj, setCpfCnpj] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [mask, setMask] = useState("");
    const [alerta, setAlerta] = useState(false);

    function handleAlert() {
        setAlerta(true);

    }

    const ShowAlerta = () => {
        return (
            <Alert variant="success">
                <p>Um link para a redefinição de senha foi enviado para o email cadastrado! </p>
                <Alert.Link as={Link} to="/login">Clique aqui para ir para a página de login</Alert.Link>
            </Alert>
        );
    }

    const ShowForm = () => {
        return (
            <>
                <p>Ao solicitar redefinição da senha o sistema enviará
                    um link para o e-mail cadastrado.</p>
                <Form>
                    <Form.Group className="mb-3" controlId="loginId">
                        <CpfCnpj
                            placeholder="Digite o CPF ou CNPJ"
                            type="tel"
                            value={cpfCnpj}
                            onChange={(ev, type) => {
                                setCpfCnpj(ev.target.value);
                                setMask(type === "CPF");
                            }}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={handleAlert}>
                        Redefinir
                    </Button>
                </Form>
            </>
        )
    }

    return (
        <Container className="mainUserScreen">

            <div>
                <h4>Redefinir senha</h4>
            </div>

            <Row >
                <Col md={9}>

                    {alerta ? <ShowAlerta /> : <ShowForm />}
                   
                </Col>
            </Row>

        </Container>
    )
}

export default RedefinirSenhaScreen;
