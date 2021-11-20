import React from 'react';

import { Badge, Button, Card, Form } from 'react-bootstrap';
import '../styles.css';

const DetalheVagaAdmin = () => {
    return (
        <div className="vagas">
            <h6>Detalhe da Vaga</h6>

            <Card>
                <Card.Body>
                    <Card.Text>
                        <b>Nome Fantasia com link para detalhes </b><br />
                        <b>Endereco: </b> Endereco da Entidade<br />
                        <b>E-mail: </b> email@email.com.br<br />
                        <b>Telefone: </b> (00) 0000-0000<br />
                    </Card.Text>
                </Card.Body>

            </Card>

            <Card>
                <Card.Body>
                    <Card.Text>
                        <b>Título da vaga: </b> Título da Vaga <br />
                        <b>Descrição: </b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer lobortis, diam sit amet finibus lobortis.<br />
                        <b>Requisitos: </b> Lorem ipsum dolor sit amet / Diam sit amet finibus lobortis /
                        Consectetur adipiscing elit <br />
                        <b>Auxílio: </b> Não<br />
                        <b>Local: </b> Rua tal, numero 23 - Bairro.Curitiba-PR<br />
                        <b>Data: </b> 28/08/2021<br />
                        <b>Horário de início: </b> 13: 00<br />
                        <b>Horário de encerramento: </b> 17: 00<br />
                        <b>Número de vagas: </b> 5<br />
                        <b>Inscritos: </b> 8<br />


                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Text>
                        <b>Status: </b>
                        <Badge id="staus" bg="warning">Pendente</Badge><br />
                        <b>Observações: </b> Aqui ficarão as observações de
                        reprovação da vaga para acompanhamento do admin<br />
                        <i>25/06/2021 - Reprovado pois a carga horária era de 16h em um dia.</i>

                    </Card.Text>
                </Card.Body>
            </Card>
            <div className="aprovacao">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Pendências para indeferimento: </Form.Label>
                        <Form.Control as="textarea" row={3} />
                    </Form.Group>
                </Form>
                <Button variant="success">
                    Aprovar
                </Button>
                <Button variant="danger">
                    Reprovar
                </Button>

            </div>
        </div>
    )
}

export default DetalheVagaAdmin;
