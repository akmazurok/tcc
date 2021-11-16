import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Detalhes from './Detalhes';
import Entidade from './Entidade';




const DetalheVaga = () => {
    return (
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
    )
}

export default DetalheVaga;
