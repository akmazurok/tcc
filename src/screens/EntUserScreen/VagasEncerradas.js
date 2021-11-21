import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardGroup, Button, Badge } from 'react-bootstrap';
import './styles.css';

const VagasEncerradas = () => {
    return (
        <div>
            <h5>Vagas Encerradas</h5>
            <CardGroup>
                <Card>
                    <Card.Body>
                        <Card.Title>Vaga 1</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer lobortis, diam sit amet finibus lobortis.
                        </Card.Text>
                        <Button variant="primary" as={Link} to="/entidade/vagas/detalhe" >Detalhes</Button>

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Encerrada em 20/05/2021</small>
                        <div className="text-right">
                            <Badge bg="info">Inscritos</Badge>
                        </div>

                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Vaga 8</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer lobortis, diam sit amet finibus lobortis.
                        </Card.Text>
                        <Button variant="primary" as={Link} to="/entidade/vagas/detalhe" >Detalhes</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Encerrada em 20/05/2021</small>
                        <div className="text-right">
                            <Badge bg="secondary">Encerrado</Badge>
                        </div>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Vaga 10</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer lobortis, diam sit amet finibus lobortis.
                        </Card.Text>
                        <Button variant="primary" as={Link} to="/entidade/vagas/detalhe" >Detalhes</Button>

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Encerrada em 20/05/2021</small>
                        <div className="text-right">
                            <Badge bg="secondary">Encerrado</Badge>
                        </div>

                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    )
}

export default VagasEncerradas;
