import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles.css';


const Entidades = () => {
    return (
        <Container className="mainUserScreen">

            <div>
                <h4>Entidades cadastradas</h4>
            </div>

            <Row >
                <Col md={9}>
                    <span>Lista das entidades cadastradas
                        com link para ver em detalhe o perfil das entidades.
                    </span>
                </Col>
            </Row>

        </Container>
    )
}

export default Entidades;
