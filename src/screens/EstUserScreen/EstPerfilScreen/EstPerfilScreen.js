import React from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import './styles.css';
import SideBar from '../SideBar/SideBar';
import EstPerfil from './EstPerfil';
import EstDados from './EstDados';
import EstContato from './EstContato';
import EstSeguranca from './EstSeguranca';

const EstPerfilScreen = () => {
    return (
        <Container className="mainPerfilScreen">

            <div>
                <h4>Tela do Estudante</h4>
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
                        <Tab eventKey="perfil" title="Perfil">
                           <EstPerfil/>
                        </Tab>
                        <Tab eventKey="dados" title="Dados Pessoais">
                           <EstDados/>
                        </Tab>
                        <Tab eventKey="contato" title="Dados de Contato">
                           <EstContato/>
                        </Tab>

                        <Tab eventKey="seguranca" title="Segurança">
                          <EstSeguranca/>
                        </Tab>
                    </Tabs>
                </Col>

               
            </Row>

        </Container>
    )
}

export default EstPerfilScreen;
