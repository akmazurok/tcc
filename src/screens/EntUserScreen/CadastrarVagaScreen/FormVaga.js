import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import '../styles.css';

const FormVaga = () => {
    const [auxilio, setAuxilio] = useState(false);
    const [endereco, setEndereco] = useState(true);

    function handleChangeAuxilio(event) {
        setAuxilio(event.target.checked);
    }

    function handleChangeEndereco(event) {
        setEndereco(event.target.checked);

    }

    const AuxilioVaga = () => {
        if (auxilio) {
            return (
                <Form.Group className="mb-3" controlId="dauxilioVaga">
                    <Form.Label>Descrição do auxilio que será concedido </Form.Label>
                    <Form.Control as="textarea" row={2} />
                </Form.Group>
            );
        }
    }


    return (
        <div>
            <Form className="form">
                <h5>Cadastrar Vaga</h5>
                <div className="obs">
                    <small>*Campos de preenchimento obrigatório</small>
                </div>

                <Form.Group className="mb-3" controlId="tituloVaga">
                    <Form.Label>Título da Vaga <em>*</em></Form.Label>
                    <Form.Control autoFocus type="text" placeholder="Digite o título da vaga" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="descricaoVaga">
                    <Form.Label>Descrição <em>*</em></Form.Label>
                    <Form.Control as="textarea" rows={3}
                        placeholder="Descreva a atividade a ser realizada" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="descricaoVaga">
                    <Form.Label>Requisitos <em>*</em></Form.Label>
                    <Form.Control as="textarea" rows={3}
                        placeholder="Liste os requisitos necessários" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="temAuxilio">
                    <Form.Check checked={auxilio}
                        onChange={handleChangeAuxilio}
                        label="Tem auxílio"
                    />
                    <Form.Text muted>
                        Exemplo: auxílio para transporte, alimentação, etc.
                    </Form.Text>
                </Form.Group>

                {/* input descrição do auxílio */}
                {AuxilioVaga()}



                <Row>
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="dataVaga">
                            <Form.Label>Data da atividade <em>*</em></Form.Label>
                            <Form.Control type="date" name="Data" />
                        </Form.Group>
                    </Col>

                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="quantidadeVaga">
                            <Form.Label>Quantidade de Vagas <em>*</em></Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="inicioVaga">
                            <Form.Label>Horario de inicio <em>*</em></Form.Label>
                            <Form.Control type="text" placeholder="00:00" />
                        </Form.Group>
                    </Col>
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="fimVaga">
                            <Form.Label>Horario de encerramento <em>*</em></Form.Label>
                            <Form.Control type="text" placeholder="00:00" />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="enderecoVaga">
                    <Form.Label>Endereço da atividade <em>*</em></Form.Label>
                    <Form.Check checked={endereco}
                        onChange={handleChangeEndereco}
                        label="Desejo usar o endereço cadastrado da Entidade"
                    />
                    <Form.Control as="textarea" row={2}
                        placeholder="Digite o endereço da atividade" disabled={endereco} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="vagaTerms">
                    <Form.Check
                        label="Declaro que a vaga cadastrada está de acordo 
                        com os termos e condições do site"
                    />
                </Form.Group>



                <div className="obs">
                    <small>ATENÇÃO: A vaga passará por avaliação antes de ser habilitada
                        para publicação
                    </small>
                </div>

                <Button variant="warning" type="reset" value="Reset">
                    Limpar
                </Button>
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>

            </Form >
        </div>
    );
};

export default FormVaga;
