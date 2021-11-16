import React from 'react';
import { Card, Row, Col, Button, Badge } from 'react-bootstrap';
import user from '../../../img/user.png';

const Inscritos = () => {
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
                                <b>Nome do voluntario </b><br />
                                <b>Curso: </b> Curso do voluntario<br />
                                <b>Idade: </b> 22 anos<br />
                                <b>Data da Inscricao: </b> 25/09/2021<br />
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col>
                        <div className="analisar">
                            <Button variant="info">Analisar</Button><br/>
                            <Badge id="status" bg="success">Aprovado</Badge>
                        </div>
                    </Col>
                </Row>
            </Card>
            <Card>
                <Row>
                    <Col md={2}>
                        <Card.Img className="avatar" src={user} />
                    </Col>
                    <Col md={6}>
                        <Card.Body>

                            <Card.Text>
                                <b>Nome do voluntario </b><br />
                                <b>Curso: </b> Curso do voluntario<br />
                                <b>Idade: </b> 22 anos<br />
                                <b>Data da Inscricao: </b> 25/09/2021<br />
                            </Card.Text>
                        </Card.Body>
                    </Col>
                    <Col>
                        <div className="analisar">
                            <Button variant="info">Analisar</Button><br />
                            <Badge id="status" bg="info">Inscrito</Badge>
                        </div>
                    </Col>
                </Row>
            </Card>

        </div>
    )
}

export default Inscritos;


