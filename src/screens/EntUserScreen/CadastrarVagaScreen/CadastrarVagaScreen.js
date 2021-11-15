import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../styles.css';
import SideBar from '../SideBar/SideBar';
import FormVaga from './FormVaga';


const CadastrarVagaScreen = () => {
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
                    <FormVaga />
                </Col>
            </Row>

        </Container>
    );

}

export default CadastrarVagaScreen;
