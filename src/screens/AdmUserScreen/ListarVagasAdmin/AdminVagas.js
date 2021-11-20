import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Card, Badge } from 'react-bootstrap';
import SearchBar from './SearchBar/SearchBar';
import './styles.css';

const AdminVagas = () => {
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
                            <option>Filtrar por...</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <b>Entidade: </b> Nome Fantasia da Entidade <br />
                            <b>Título da vaga: </b> Título da Vaga <br />
                            <b>Numero de Vagas: </b> 5 <br />
                            <b>Data da atividade: </b> 02/08/2021<br />
                            <b>Data da solicitação: </b> 02/07/2021 <br />
                            <Card.Link as={Link} to="/admin/vagas/detalhe">Detalhes</Card.Link><br />
                            <Badge id="staus" bg="warning">Pendente</Badge>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <b>Entidade: </b> Nome Fantasia da Entidade <br />
                            <b>Título da vaga: </b> Título da Vaga <br />
                            <b>Numero de Vagas: </b> 5 <br />
                            <b>Data da atividade: </b> 02/08/2021<br />
                            <b>Data da solicitação: </b> 02/07/2021 <br />
                            <Card.Link as={Link} to="/admin/vagas/detalhe">Detalhes</Card.Link><br />
                            <Badge id="staus" bg="warning">Pendente</Badge>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <b>Entidade: </b> Nome Fantasia da Entidade <br />
                            <b>Título da vaga: </b> Título da Vaga <br />
                            <b>Numero de Vagas: </b> 5 <br />
                            <b>Data da atividade: </b> 02/08/2021<br />
                            <b>Data da solicitação: </b> 02/07/2021 <br />
                            <Card.Link as={Link} to="/admin/vagas/detalhe">Detalhes</Card.Link><br />
                            <Badge id="staus" bg="success">Aprovada</Badge>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <b>Entidade: </b> Nome Fantasia da Entidade <br />
                            <b>Título da vaga: </b> Título da Vaga <br />
                            <b>Numero de Vagas: </b> 5 <br />
                            <b>Data da atividade: </b> 02/08/2021<br />
                            <b>Data da solicitação: </b> 02/07/2021 <br />
                            <Card.Link as={Link} to="/admin/vagas/detalhe">Detalhes</Card.Link><br />
                            <Badge id="staus" bg="success">Aprovada</Badge>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>
        </div >
    )
}

export default AdminVagas;
