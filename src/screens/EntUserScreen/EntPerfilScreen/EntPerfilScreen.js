import React from 'react';
import { Row, Col, Container, Tabs, Tab } from 'react-bootstrap';
import '../styles.css';
import SideBar from '../SideBar/SideBar';
import EntPerfil from './EntPerfil';
import EntDados from './EntDados';
import EntContato from './EntContato';
import EntSeguranca from './EntSeguranca';

const EntPerfilScreen = () => {
    return (
        <Container className="mainPerfilScreen">

            <div>
                <h4>Tela da Entidade</h4>
            </div>

            <Row >
                <Col md={3}>
                    <SideBar />
                </Col>

                <Col md={9}>
                    <h5>Tela de Perfil</h5>
                    <Tabs
                        defaultActiveKey="perfil"
                        transition={false}
                        className="mb-3"
                    >
                        <Tab eventKey="perfil" title="Perfil da Entidade">
                            <EntPerfil />
                        </Tab>
                        <Tab eventKey="dados" title="Dados da Entidade">
                            <EntDados />
                        </Tab>
                        <Tab eventKey="contato" title="Dados de Contato">
                            <EntContato />
                        </Tab>

                        <Tab eventKey="seguranca" title="Segurança">
                            <EntSeguranca />
                        </Tab>
                    </Tabs>
                </Col>
            </Row>

        </Container>
    )
}

export default EntPerfilScreen;
