import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles.css';
import SideBar from '../SideBar/SideBar';
import Vagas from './Vagas';

const ListarVagasScreen = () => {
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
                    <Vagas />
                </Col>
            </Row>

        </Container>
    );


}

export default ListarVagasScreen;
