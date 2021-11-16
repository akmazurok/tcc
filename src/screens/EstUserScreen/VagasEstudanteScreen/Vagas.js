import React from 'react';
import { Row, Col, Form, Card, Badge } from 'react-bootstrap';
import SearchBar from './SearchBar/SearchBar';
import './styles.css';

const Vagas = () => {
    return (
        <div id="vagas">
            <h5>Vagas disponiveis</h5>
            <Row className="busca">
                <Col md="auto">
                    <SearchBar />
                </Col>
                <Col md="auto">
                    <Form.Group className="mb-3" controlId="filterVagas">
                        <Form.Select>
                            <option>Filtrar por...</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <b>Título da vaga: </b> Título da Vaga <br />
                            <b>Entidade: </b> Nome Fantasia da Entidade <br />
                            <b>Local: </b> Endereço <br />
                            <b>Data: </b> 02/07/2021<br />
                            <b>Horário: </b> 18: 00 - 21: 00<br />
                            <b>Vagas: </b> 5 <br />
                            <a href="/estudante/vagas/detalhe">Detalhes</a> <br />
                            <Badge id="staus" bg="success">Aberta</Badge>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <b>Título da vaga: </b> Título da Vaga <br />
                            <b>Entidade: </b> Nome Fantasia da Entidade <br />
                            <b>Local: </b> Endereço <br />
                            <b>Data: </b> 02/07/2021<br />
                            <b>Horário: </b> 18: 00 - 21: 00<br />
                            <b>Vagas: </b> 5 <br />
                            <a href="/estudante/vagas/detalhe">Detalhes</a> <br />
                            <Badge id="staus" bg="success">Aberta</Badge>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <b>Título da vaga: </b> Título da Vaga <br />
                            <b>Entidade: </b> Nome Fantasia da Entidade <br />
                            <b>Local: </b> Endereço <br />
                            <b>Data: </b> 02/07/2021<br />
                            <b>Horário: </b> 18: 00 - 21: 00<br />
                            <b>Vagas: </b> 5 <br />
                            <a href="/estudante/vagas/detalhe">Detalhes</a> <br />
                            <Badge id="staus" bg="secondary">Encerrada</Badge>

                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <b>Título da vaga: </b> Título da Vaga <br />
                            <b>Entidade: </b> Nome Fantasia da Entidade <br />
                            <b>Local: </b> Endereço <br />
                            <b>Data: </b> 02/07/2021<br />
                            <b>Horário: </b> 18: 00 - 21: 00<br />
                            <b>Vagas: </b> 5 <br />
                            <a href="/estudante/vagas/detalhe">Detalhes</a> <br />
                            <Badge id="staus" bg="danger">Inscrito</Badge>

                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </div >
    )
}

export default Vagas;
