import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import './styles.css';

const EstSeguranca = () => {
    return (
        <Container className="detalhes">
            <Card className="card">
                <h6>Senha</h6>
                <Button variant="warning" >
                    Redefinir
                </Button>
            </Card>

            <Card className="card">
                <h6>Sessões ativas</h6>
                <Card.Body>Você tem 2 sessões ativas</Card.Body>
                <Button variant="primary" >
                    Ver Sessões
                </Button>
            </Card>

        </Container>
    )
}

export default EstSeguranca;
