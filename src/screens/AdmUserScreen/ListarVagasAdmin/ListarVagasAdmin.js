import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';
import AdminVagas from './AdminVagas';


const ListarVagasAdmin = () => {
    return (
        <Container className="mainUserScreen">

            <div>
                <h4>Tela de Administração</h4>
            </div>

            <Row >
                <Col md={3}>
                    <SideBar />
                </Col>

                <Col md={9}>
                    <AdminVagas />
                </Col>
            </Row>

        </Container>
    )
}

export default ListarVagasAdmin;
