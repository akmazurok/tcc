import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../styles.css';
import SideBar from '../SideBar/SideBar';

const EntPerfilScreen = () => {
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
                    <h5>Tela de Perfil</h5>
                    <span>O sistema vai apresentar os dados cadastrados
                        e fornecer um outro formulário complementar com os campos missão da
                        empresa e foto de perfil. Nesta tela a entidade poderá 
                        editar alguns dados cadastrados.</span>
                </Col>
            </Row>

        </Container>
    )
}

export default EntPerfilScreen;
