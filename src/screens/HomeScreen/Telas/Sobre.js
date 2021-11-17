import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles.css';


const Sobre = () => {
    return (
        <Container className="mainUserScreen">

            <div>
                <h4>Sobre</h4>
            </div>

            <Row >
                <Col md={9}>
                    <span>Texto sobre os objetivos do projeto</span>
                </Col>
            </Row>

        </Container>
    )
}

export default Sobre;
