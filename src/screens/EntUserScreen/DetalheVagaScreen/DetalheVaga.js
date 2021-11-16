import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Detalhes from './Detalhes';
import Inscritos from './Inscritos';
/*
Tab Inscritos
Foto
Nome
Data da inscricao
Status
Botao Analisar

Tab Lista de Presenca
Lista participantes e disponibiliza para lancar se
o voluntario esteve presente e qual foi
o horario de chegada e saida do voluntario


*/


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
            <Tab eventKey="inscritos" title="Inscritos">
                <Inscritos />
            </Tab>
            <Tab eventKey="presenca" title="Lista de Presença">
                <div id="presenca">
                    A Lista de Presença estará disponível somente na data da atividade.
                </div>
            </Tab>
        </Tabs>
    )
}

export default DetalheVaga;
