import React from 'react'
import { Card, Row, Col, Badge } from 'react-bootstrap';
import './styles.css';

const VagasAprovacao = () => {
    return (
        <div>
            <h5>Vagas em aprovação</h5>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <b>Título da vaga: </b> Título da Vaga <br />
                            <b>Instituicao: </b> Nome da ONG <br />
                            <b>Local: </b> Endereço <br />
                            <b>Data: </b> 28/09/2021<br />
                            <b>Horário: </b> 18: 00 - 21: 00<br />
                            <a href="/">Detalhes</a> <br />
                            <Badge id="staus" bg="warning">Pendente</Badge>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <b>Título da vaga: </b> Título da Vaga <br />
                            <b>Instituicao: </b> Nome da ONG <br />
                            <b>Local: </b> Endereço <br />
                            <b>Data: </b> 28/09/2021<br />
                            <b>Horário: </b> 18: 00 - 21: 00<br />
                            <a href="/">Detalhes</a> <br />
                            <Badge id="staus" bg="warning">Pendente</Badge>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <b>Título da vaga: </b> Título da Vaga <br />
                            <b>Instituicao: </b> Nome da ONG <br />
                            <b>Local: </b> Endereço <br />
                            <b>Data: </b> 28/09/2021<br />
                            <b>Horário: </b> 18: 00 - 21: 00<br />
                            <a href="/">Detalhes</a> <br />
                            <Badge id="staus" bg="warning">Pendente</Badge>
                        </Card.Body>
                    </Card>
                </Col>




            </Row>
        </div>
    )
}

export default VagasAprovacao;
