import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './styles.css';
import SideBar from './SideBar/SideBar';
import VagasAbertas from './VagasAbertas';
import VagasEncerradas from './VagasEncerradas';

const EntUserScreen = () => {
    return (
        <Container className="mainUserScreen">

            <div>
                <h4>Tela da Entidade</h4>
            </div>

            <Row >
                <Col md={3}>
                    <SideBar />
                </Col>

                <Col md={9}>
                    <Row className="vagasdestaque">
                        <VagasAbertas />
                    </Row>

                    <Row className="vagasdestaque">
                        <VagasEncerradas />
                    </Row>

                </Col>
            </Row>

        </Container>
    );
};



export default EntUserScreen;

