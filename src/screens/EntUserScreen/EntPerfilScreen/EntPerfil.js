import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import user from '../../../img/user.png';
import './styles.css';

const EntPerfil = () => {
    return (
        <Container className="perfil">
            <div className="row">
                <img className="avatar col" alt="perfil" src={user}></img>
                
                <Form.Group controlId="formFile" className="mb-3 col">
                    <Form.Label>Foto de Perfil:</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>
            </div>

            <Form className="dados">
                <Form.Group className="mb-3" controlId="entMissao">
                    <Form.Label>Missão da Entidade: </Form.Label>
                    <Form.Control as="textarea" row={3} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="entVoluntarios">
                    <Form.Label>Perfil de Voluntários procurados: </Form.Label>
                    <Form.Control as="textarea" row={3} />
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

export default EntPerfil;


