import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import DetalheVaga from './DetalheVaga';

const DetalheVagaScreen = () => {
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
            <DetalheVaga />
            </Col>
        </Row>

    </Container>
    );
};

export default DetalheVagaScreen;
