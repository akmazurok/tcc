import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SideBar from './SideBar/SideBar';

const EstUserScreen = () => {
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
                    <Row className="vagas">
                   
                    </Row>

                    <Row className="vagas">
                     
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}

export default EstUserScreen
