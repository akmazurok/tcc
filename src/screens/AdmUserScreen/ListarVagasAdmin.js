import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../AdmUserScreen/SideBar/SideBar';

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
               Lista de vagas e combobox para filtrar por status
            </Col>
        </Row>

    </Container>
    )
}

export default ListarVagasAdmin;
