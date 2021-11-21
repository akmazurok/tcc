import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './styles.css';

const FormCnpj = () => {
    return (
        <div>
            <Form className="form">
                <div className="obs">
                    <small>*Campos de preenchimento obrigatório</small>
                </div>

                {/* COLOCAR MASCARA */}
                <Form.Group className="mb-3" controlId="registerCnpj">
                    <Form.Label>CNPJ <em>*</em></Form.Label>
                    <Form.Control autoFocus type="CNPJ" placeholder="Digite o CNPJ" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="registerRazao">
                    <Form.Label>Razão Social <em>*</em></Form.Label>
                    <Form.Control placeholder="Digite a Razão Social da Entidade" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="registerNome">
                    <Form.Label>Nome Fantasia <em>*</em></Form.Label>
                    <Form.Control placeholder="Digite o Nome Fantasia da Entidade" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="registerResposavel">
                    <Form.Label>Nome do(a) Responsável pelo cadastro <em>*</em></Form.Label>
                    <Form.Control
                        placeholder="Digite o Nome do(a) Responsável pelo cadastro" />
                </Form.Group>


                {/*COLOCAR MASCARA */}
                <Form.Group className="mb-3" controlId="registerEmail">
                    <Form.Label>E-mail <em>*</em></Form.Label>
                    <Form.Control type="email" placeholder="nome@exemplo.com" />
                </Form.Group>

                {/*COLOCAR MASCARA */}
                <Form.Group className="mb-3" controlId="registerPhone">
                    <Form.Label>Telefone <em>*</em></Form.Label>
                    <Form.Control type="tel" placeholder="(00)00000-0000" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="registerEndCep">
                    <Form.Label>CEP <em>*</em></Form.Label>
                    <Form.Control type="CEP" placeholder="00000-000" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="registerEndSt">
                    <Form.Label>Logradouro <em>*</em></Form.Label>
                    <Form.Control placeholder="Rua, Avenida, Travessa, etc." />
                </Form.Group>

                <Row>
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="registerEndNum">
                            <Form.Label>Número <em>*</em></Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Col>
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="registerEndBairro">
                            <Form.Label>Bairro </Form.Label>
                            <Form.Control />
                        </Form.Group>

                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="registerEndOth">
                    <Form.Label>Complemento </Form.Label>
                    <Form.Control placeholder="Complemento ou ponto de referência" />
                </Form.Group>

                <Row>
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="registerEndUf">
                            <Form.Label>Estado/UF <em>*</em></Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Col>
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="registerEndCity">
                            <Form.Label>Cidade <em>*</em></Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="registerPassword">
                    <Form.Label>Senha </Form.Label>
                    <Form.Control type="password" placeholder="Digite a senha" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirmar Senha </Form.Label>
                    <Form.Control type="password" placeholder="Confirme a senha" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="registerTerms">
                    <Form.Check
                        label="Declaro que li e concordo
                        com os Termos de uso e privacidade:"
                    />
                </Form.Group>
            
                <div className="obs">
                    <small>ATENÇÃO: O cadastro passará por avaliação antes de ser habilitado
                        para a publicação de vagas
                    </small>
                </div>

                <Button variant="warning">
                    Limpar
                </Button>
                <Button variant="primary" as={Link} to="/estudante">
                    Cadastrar
                </Button>

            </Form >
        </div>
    )
}

export default FormCnpj;
