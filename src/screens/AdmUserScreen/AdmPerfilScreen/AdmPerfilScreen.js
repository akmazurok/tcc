import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from '../SideBar/SideBar';

const AdmPerfilScreen = () => {
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
                    <h5>Tela de Perfil</h5>
                    <span>O sistema vai apresentar os dados cadastrados
                        e fornecer um outro formulário complementar. 
                        Nesta tela o usuário poderá
                        editar alguns dados cadastrados.</span>
                </Col>
            </Row>

        </Container>
    )
}

export default AdmPerfilScreen;
