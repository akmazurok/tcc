import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';
import Vagas from './Vagas';

const VagasGeral = () => {
    return (
        <Container className="mainUserScreen">

            <div>
                <h4>Vagas Disponiveis</h4>
            </div>

            <Row >
                <Col md={9}>
                    <Vagas />
                </Col>
            </Row>

        </Container>
    );


}

export default VagasGeral;
