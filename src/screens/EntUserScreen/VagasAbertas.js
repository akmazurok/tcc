import React from 'react';
import {Link} from 'react-router-dom';
import { Card, CardGroup, Button, Badge } from 'react-bootstrap';
import './styles.css';


const VagasAbertas = () => {
    return (
        <div>
            <h5>Vagas Abertas</h5>
            <CardGroup>
                <Card className="card">
                    <Card.Body>
                        <Card.Title>Vaga 4</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer lobortis, diam sit amet finibus lobortis.
                        </Card.Text>
                        <Button variant="primary" as={Link} to="/entidade/vagas/detalhe" >Detalhes</Button>

                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publicada em 20/05/2021</small>
                        <div className="text-right">
                            <small>Incritos: </small><Badge bg="info">9</Badge>
                        </div>

                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Body>
                        <Card.Title>Vaga 3</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer lobortis, diam sit amet finibus lobortis.
                        </Card.Text>
                        <Button variant="primary">Detalhes</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publicada em 20/05/2021</small>
                        <div className="text-right">
                            <small>Incritos: </small><Badge bg="info">9</Badge>
                        </div>
                    </Card.Footer>
                </Card>
                <Card className="card">
                    <Card.Body>
                        <Card.Title>Vaga 2</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer lobortis, diam sit amet finibus lobortis.
                        </Card.Text>
                        <Button variant="primary" as={Link} to="/entidade/vagas/detalhe">Detalhes</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publicada em 20/05/2021</small>
                        <div className="text-right">
                            <small>Incritos: </small><Badge bg="info">9</Badge>
                        </div>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </div>
    )
}

export default VagasAbertas;
