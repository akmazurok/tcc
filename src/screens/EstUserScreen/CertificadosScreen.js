import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';
import SideBar from './SideBar/SideBar';


const CertificadosScreen = () => {
    return (
        <Container className="mainUserScreen">

            <div>
                <h4>Tela do Estudante</h4>
            </div>

            <Row >
                <Col md={3}>
                    <SideBar />
                </Col>

                <Col md={9} className="descricao">
                <h5>Certificados</h5>
                    <span>Esta tela listará as participações finalizadas
                         e disponibilizará para download os certificados
                         gerados pelo sistema. </span>
                </Col>
            </Row>

        </Container>
    );


}

export default CertificadosScreen;
