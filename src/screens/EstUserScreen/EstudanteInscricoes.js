import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles.css';
import SideBar from './SideBar/SideBar';

const EstudanteInscricoes = () => {
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
            <h5>Minhas inscrições</h5>
                <span>Esta tela listará as vagas nas quais o 
                    estudante está inscrito. Haverá um link para 
                    abrir os detalhes da vaga</span>
            </Col>
        </Row>

    </Container>
    )
};


export default EstudanteInscricoes;
;