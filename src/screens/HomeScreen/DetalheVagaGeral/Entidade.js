import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import user from '../../../img/user.png';

const Entidade = () => {
    return (
        <div className="inscritos">
            <Card>
                <Row>
                    <Col md={2}>
                        <Card.Img className="avatar" src={user} />
                    </Col>
                    <Col md={6}>
                        <Card.Body>
                            <Card.Text>
                                <b>Nome Fantasia </b><br />
                                <b>Endereco: </b> Endereco da Entidade<br />
                                <b>E-mail: </b> email@email.com.br<br />
                                <b>Telefone: </b> (00) 0000-0000<br />
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>


        </div>
    )
}

export default Entidade;


