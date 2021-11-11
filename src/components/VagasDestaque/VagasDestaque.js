import React from 'react';
import { Card, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';
import vaga1 from "../../img/vaga1.jpg";
import vaga2 from "../../img/vaga2.jpg";
import vaga3 from "../../img/vaga3.jpg";

const VagasDestaque = () => {
    return (
        <>
            <div className="card-group">
                <Card className="card">
                    <Card.Img variant="top" src={vaga1} />
                    <Card.Body>
                        <Card.Title>Vaga 1</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Detalhes</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publicada em 20/05/2021</small>
                    </Card.Footer>
                </Card>

                <Card className="card">
                    <Card.Img variant="top" src={vaga2} />
                    <Card.Body>
                        <Card.Title>Vaga 2</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer lobortis, diam sit amet finibus lobortis.
                        </Card.Text>
                        <Button variant="primary">Detalhes</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publicada em 20/05/2021</small>
                    </Card.Footer>
                </Card>

                <Card className="card">
                    <Card.Img variant="top" src={vaga3} />
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
                    </Card.Footer>
                </Card>

                <Card className="card">
                    <Card.Img variant="top" src={vaga1} />
                    <Card.Body>
                        <Card.Title>Vaga 4</Card.Title>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Integer lobortis, diam sit amet finibus lobortis.
                        </Card.Text>
                        <Button variant="primary">Detalhes</Button>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Publicada em 20/05/2021</small>
                    </Card.Footer>
                </Card>


            </div>

            <div className="mais">
                <Nav.Link as={Link} to="/vagas">Veja mais vagas</Nav.Link>
            </div>
        </>
    )
}

export default VagasDestaque;
