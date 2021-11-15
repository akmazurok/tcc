import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from './SideBar/SideBar';
import VagasDisponiveis from './VagasDisponiveis';

const EstUserScreen = () => {
    return (
        <Container className="mainUserScreen">
            <div>
                <h4>Tela do Estudante</h4>
            </div>

            <Row >
                <Col md={3}>
                    <SideBar />
                </Col>

                <Col md={9}>
                    <Row className="vagas">
                        <h5>Últimas inscrições</h5>
                        <span>Você ainda não tem inscrições em vagas</span> 
                    </Row>

                    <Row className="vagas">
                        <VagasDisponiveis />
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default EstUserScreen
