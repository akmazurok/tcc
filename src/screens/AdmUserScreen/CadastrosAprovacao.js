import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Badge } from 'react-bootstrap';
import './styles.css';

const CadastrosAprovacao = () => {
    return (
        <div className="vagas">
            <h5>Cadastros em aprovação</h5>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <b>Instituicao: </b> Nome da ONG <br />
                            <b>CNPJ: </b> 12.987.928/0001-91 <br />
                            <b>Data da solicitacao: </b> 28/09/2021<br />
                            <Card.Link as={Link} to="/admin/vagas/detalhe">Detalhes</Card.Link><br />
                            <Badge id="staus" bg="warning">Pendente</Badge>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Body>
                            <b>Instituicao: </b> Nome da ONG <br />
                            <b>CNPJ: </b> 12.987.928/0001-91 <br />
                            <b>Data da solicitacao: </b> 28/09/2021<br />
                            <Card.Link as={Link} to="/admin/vagas/detalhe">Detalhes</Card.Link><br />
                            <Badge id="staus" bg="warning">Pendente</Badge>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    )
}

export default CadastrosAprovacao;
