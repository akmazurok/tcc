import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './styles.css';

const FormCpf = () => {
    const [social, setSocial] = useState(false);

    function handleChange(event) {
        setSocial(event.target.checked);
    }

    const NomeSocial = () => {
        if (social) {
            return (
                <Form.Group className="mb-3" controlId="registerNameS">
                    <Form.Label>Nome Social </Form.Label>
                    <Form.Control placeholder="Digite o Nome Social" />
                </Form.Group>
            );
        }
    }


    return (
        <div>
            <Form className="form">
                <div className="obs">
                    <small>*Campos de preenchimento obrigatório</small>
                    <h6>{social}</h6>
                </div>


                {/* COLOCAR MASCARA */}
                <Form.Group className="mb-3" controlId="registerCpf">
                    <Form.Label>CPF <em>*</em></Form.Label>
                    <Form.Control autoFocus type="CPF" placeholder="Digite seu CPF" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="registerName">
                    <Form.Label>Nome Completo <em>*</em></Form.Label>
                    <Form.Control placeholder="Digite seu Nome Completo" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="registerSocial">
                    <Form.Check checked={social}
                        onChange={handleChange}
                        label="Desejo usar meu Nome Social"
                    />
                </Form.Group>

                {/* input nome social */}
                {NomeSocial()}

                <Row >
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="registerGender">
                            <Form.Label>Identificação de Gênero <em>*</em></Form.Label>
                            <Form.Select
                                placeholder="Selecione...">
                                <option>Selecione...</option>
                                <option value="1">Feminino (Cis ou Trans)</option>
                                <option value="2">Masculino (Cis ou Trans)</option>
                                <option value="3">Outro</option>
                                <option value="4">Prefiro não responder</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md="auto">
                        <Form.Group className="mb-3" controlId="registerBirth">
                            <Form.Label>Data de Nascimento <em>*</em></Form.Label>
                            <Form.Control type="date"
                                name='Data de Nascimento'
                            />
                        </Form.Group>
                    </Col>
                </Row>

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
                    <Form.Control type="password" placeholder="Digite a sua senha" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirmar Senha </Form.Label>
                    <Form.Control type="password" placeholder="Confirme a sua senha" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="registerTerms">
                    <Form.Check
                        label="Declaro que li e concordo
                        com os Termos de uso e privacidade:"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Limpar
                </Button>
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>
    )
}

export default FormCpf
