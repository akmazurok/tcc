import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles.css';


const Faq = () => {
    return (
        <Container className="mainUserScreen">

            <div>
                <h4>FAQ</h4>
            </div>

            <Row >
                <Col md={9}>
                    <span>Página com itens explicando como o sistema funciona.
                        Ex: Como fazer o cadastro, o que é necessário, quais
                        documentos, etc.</span>
                </Col>
            </Row>

        </Container>
    )
}

export default Faq;
