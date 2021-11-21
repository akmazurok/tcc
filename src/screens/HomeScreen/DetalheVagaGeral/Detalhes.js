import React from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button } from 'react-bootstrap';
import './styles.css';


const Detalhes = () => {
    return (
        <div className="detalhes">
            <b>Título da vaga: </b> Título da Vaga <br />
            <b>Nome da Entidade: </b> Nome Fantasia da Entidade<br />
            <b>Descrição: </b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer lobortis, diam sit amet finibus lobortis. <br />
            <b>Requisitos: </b> Lorem ipsum dolor sit amet / Diam sit amet finibus lobortis /
            Consectetur adipiscing elit <br />
            <b>Auxílio: </b> Não<br />
            <b>Local: </b> Rua tal, numero 23 - Bairro. Curitiba-PR<br />
            <b>Data: </b> 28/08/2021<br />
            <b>Horário de início: </b> 13:00<br />
            <b>Horário de encerramento: </b> 17:00<br />
            <b>Número de vagas: </b> 5<br />
            <b>Status: </b>
            <Badge id="staus" bg="success">Aberta</Badge>
            <Button variant="primary" as={Link} to="/login">
                Inscricao
            </Button>

            <div className="acoes">
                <Button as={Link} to="/" variant="secondary">
                    Voltar
                </Button>

            </div>
        </div>
    )
}

export default Detalhes
