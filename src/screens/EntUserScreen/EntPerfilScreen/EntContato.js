import React from 'react';
import { Button } from 'react-bootstrap';
import './styles.css';

const EntContato = () => {
    return (
        <div className="detalhes">
            <b>E-mail: </b> ong1@ong.com.br<br />
            <b>Telefone: </b> (41)33423-9928<br />
            <br />
            <b>Endereço </b><br />
            <b>CEP: </b> 81402-000<br />
            <b>Logradouro: </b> Avenida Brasil<br />
            <b>Número: </b> 5602<br />
            <b>Complemento: </b> Sala 2<br />
            <b>Cidade: </b> Curitiba<br />
            <b>Estado: </b> Paraná<br />

            <div className="acoes">
                <Button variant="warning" type="reset" value="Reset">
                    Editar
                </Button>
            </div>

        </div>



    )
}

export default EntContato;

