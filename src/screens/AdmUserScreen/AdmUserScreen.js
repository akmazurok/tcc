import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from './SideBar/SideBar';
import CadastrosAprovacao from './CadastrosAprovacao';
import VagasAprovacao from './VagasAprovacao';
import './styles.css';

const AdmUserScreen = () => {
    return (
        <div>
            <Container className="mainUserScreen">
                <div>
                    <h4>Tela do Administrador</h4>
                </div>

                <Row >
                    <Col md={3}>
                        <SideBar />
                    </Col>

                    <Col md={9}>
                        <Row >
                            <CadastrosAprovacao />
                        </Row>

                        <Row >
                            <VagasAprovacao />
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default AdmUserScreen;
