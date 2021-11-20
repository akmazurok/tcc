import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import DetalheVagaAdmin from './DetalheVagaAdmin';

const DetalheVagaAdminScreen = () => {
    return (
        <Container className="mainUserScreen">

            <div>
                <h4>Tela do Administrador</h4>
            </div>

            <Row >
                <Col md={3}>
                    <SideBar />
                </Col>

                <Col md={9}>
                    <DetalheVagaAdmin />
                </Col>
            </Row>

        </Container>
    )
}

export default DetalheVagaAdminScreen;
