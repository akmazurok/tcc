import React from 'react';
import { Row, Col, Form, Card, Badge } from 'react-bootstrap';
import SearchBar from '../../../components/SearchBar/SearchBar';
import './styles.css';

const Vagas = () => {
    return (
        <div id="vagas">
            <h5>Vagas cadastradas</h5>
            <Row className="busca">
                <Col md="auto">
                    <SearchBar />
                </Col>
                <Col md="auto">
                    <Form.Group className="mb-3" controlId="filterVagas">
                        <Form.Select>
                            <option>Status...</option>
                            <option value="1">Todas</option>
                            <option value="2">Abertas</option>
                            <option value="3">Com inscritos</option>
                            <option value="4">Encerradas</option>
                            <option value="5">Pendentes</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <b>Título da vaga: </b> Título da Vaga <br />
                            <b>Local: </b> Endereço <br />
                            <b>Data: </b> 02/07/2021<br />
                            <b>Horário: </b> 18: 00 - 21: 00<br />
                            <b>Inscritos: </b> 12 / 2<br />
                            <a href="/entidade/vagas/detalhe">Detalhes</a> <br />
                            <Badge id="staus" bg="success">Aberta</Badge>
                            <Badge id="staus" bg="info">Com inscritos</Badge>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <b>Título da vaga: </b> Título da Vaga <br />
                            <b>Local: </b> Endereço <br />
                            <b>Data: </b> 02/07/2021<br />
                            <b>Horário: </b> 18: 00 - 21: 00<br />
                            <b>Inscritos: </b> 12 / 2<br />
                            <a href="/entidade/vagas/detalhe">Detalhes</a> <br />
                            <Badge id="staus" bg="success">Aberta</Badge>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <b>Título da vaga: </b> Título da Vaga <br />
                            <b>Local: </b> Endereço <br />
                            <b>Data: </b> 28/09/2021<br />
                            <b>Horário: </b> 18: 00 - 21: 00<br />
                            <b>Inscritos: </b> 0 / 2<br />
                            <a href="/entidade/vagas/detalhe">Detalhes</a> <br />
                            <Badge id="staus" bg="warning">Pendente</Badge>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <b>Título da vaga: </b> Título da Vaga <br />
                            <b>Local: </b> Endereço <br />
                            <b>Data: </b> 02/07/2021<br />
                            <b>Horário: </b> 18: 00 - 21: 00<br />
                            <b>Inscritos: </b> 12 / 2<br />
                            <a href="/entidade/vagas/detalhe">Detalhes</a> <br />
                            <Badge id="staus" bg="secondary">Encerrada</Badge>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </div >
    )
}

export default Vagas;
