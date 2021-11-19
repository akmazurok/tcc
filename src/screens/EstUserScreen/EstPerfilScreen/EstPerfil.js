import React, { } from 'react';
import {
    Container, Form, Button,
    Table, Card, Row, Col, Accordion
} from 'react-bootstrap';
import user from '../../../img/user.png';
import { FaRegEdit, FaRegTrashAlt, FaEye } from "react-icons/fa";
import './styles.css';

const EstPerfil = () => {

    return (
        <Container className="perfil">
            <div className="row">
                <img className="avatar col" alt="perfil" src={user}></img>

                <Form.Group controlId="formFile" className="mb-3 col">
                    <Form.Label>Foto de Perfil:</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
            </div>

            <Card className="card">
                <h6>Cursos</h6>
                <div className="obs">
                    <small>É necessário ter ao menos um curso ativo cadastrado</small>
                </div>

                <Accordion defaultActiveKey="0">
                    <Accordion.Item >
                        <Accordion.Header>Adicionar novo curso</Accordion.Header>
                        <Accordion.Body>
                            <div className="obs">
                                <small>*Campos de preenchimento obrigatório</small>
                            </div>
                            <Form.Group className="mb-3" controlId="novoCurso">
                                <Form.Label>Nome Curso <em>*</em></Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="novoCurso">
                                <Form.Label>Grau acadêmico <em>*</em> </Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="novoCurso">
                                <Form.Label>Instituição de Ensino <em>*</em> </Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>

                            <Row>
                                <Col className="md-auto">
                                    <Form.Group className="mb-3" controlId="novoCurso">
                                        <Form.Label>Ano de início <em>*</em> </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                                <Col className="md-auto">
                                    <Form.Group className="mb-3" controlId="novoCurso">
                                        <Form.Label>Ano previsto de conclusão <em>*</em> </Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group controlId="formFile" className="mb-3 col">
                                <Form.Label>Comprovante de Matrícula <em>*</em></Form.Label>
                                <Form.Control type="file" />
                                <Form.Text className="text-muted">
                                    Formato .pdf - tamanho máximo de 1MB
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary">
                                Adicionar
                            </Button>
                        </Accordion.Body>
                    </Accordion.Item>

                </Accordion>
                <Card className="card">
                    <h6>Cursos cadastrados</h6>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>Curso</th>
                                <th>Instituição</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Curso 1</td>
                                <td>Instituição 1</td>
                                <td><FaEye color='blue'/>  <FaRegEdit color='orange'/>  <FaRegTrashAlt color='red'/></td>
                            </tr>
                        </tbody>
                    </Table>
                </Card>

            </Card>

            <Form className="dados">
                <Form.Group className="mb-3" controlId="entMissao">
                    <Form.Label>Áreas de Interesse: </Form.Label>
                    <Form.Control as="textarea" row={3} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="entVoluntarios">
                    <Form.Label>Experiências Anteriores: </Form.Label>
                    <Form.Control as="textarea" row={5} />
                </Form.Group>

            </Form>
            <div className="acoes">
                <Button variant="danger">
                    Cancelar
                </Button>
                <Button variant="success">
                    Salvar
                </Button>
            </div>
        </Container>
    )
}

export default EstPerfil;

