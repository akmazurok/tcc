import React from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import Detalhes from './Detalhes';
import Entidade from './Entidade';

const DetalheVaga = () => {
    return (
        <Container className="mainUserScreen">
        <div>
            <h4>Detalhe da vaga</h4>
        </div>
        <Tabs
            defaultActiveKey="detalhes"
            transition={false}
            className="mb-3"
        >
            <Tab eventKey="detalhes" title="Detalhes da Vaga">
                <Detalhes />
            </Tab>
            <Tab eventKey="entidade" title="Entidade">
                <Entidade />
            </Tab>
           
        </Tabs>
        </Container>
    )
}

export default DetalheVaga;
