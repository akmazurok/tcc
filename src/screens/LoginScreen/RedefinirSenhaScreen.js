import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';

const RedefinirSenhaScreen = () => {
    return (
        <Container className="mainUserScreen">

            <div>
                <h4>Redefinir senha</h4>
            </div>

            <Row >
                <Col md={9}>
                    <span>Campo com input do cpf ou cnpj e botao para solicitar
                        redefinicao de senha.<br />
                        Apos clicar no botao para
                        redefinir, o sistema verificara se o usuario tem cadastro
                        e emitira em pop-up uma mensagem informando
                        que um link para a redefinicao foi enviado para
                        o email cadastrado (informar os ultimos digitos).<br />
                        Se nao for encontrado emitira uma mensagem
                        avisando que o CPF/CNPJ nao esta cadastrado.
                    </span>
                </Col>
            </Row>

        </Container>
    )
}

export default RedefinirSenhaScreen;
