import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles.css';

const Fontes = () => {
    return (
        <Container className="mainUserScreen">

            <div>
                <h4>Fontes das Imagens</h4>
            </div>

            <Row >
                <Col md={9}>
                    <span>As imagens utilizadas nesse protótipo possuem as seguintes atribuções:</span><br/>
                    <br/>
                    Fotos Carrossel Principal<br/>
                    <a href="https://www.freepik.com/photos/man">Man photo created by rawpixel.com - www.freepik.com</a><br/>
                    <a href="https://www.freepik.com/photos/social">Social photo created by freepik - www.freepik.com</a><br/>
                    <a href="https://www.freepik.com/photos/people">People photo created by jcomp - www.freepik.com</a><br/>
                    <br/>
                    Fotos vagas<br/>
                    <a href="https://br.freepik.com/fotos/negocio">Negócio foto criado por rawpixel.com - br.freepik.com</a><br/>
                    <a href="https://br.freepik.com/fotos/trabalho">Trabalho foto criado por prostooleh - br.freepik.com</a><br/>
                    <a href="https://br.freepik.com/fotos/alimento">Alimento foto criado por freepik - br.freepik.com</a><br/>
                    <a href="https://br.freepik.com/fotos/pessoas">Pessoas foto criado por jcomp - br.freepik.com</a><br/>
                    <br/>
                    Tela login<br/>
                    <a href="https://www.vecteezy.com/free-vector/charity">Charity Vectors by Vecteezy</a><br/>
                    <br/>
                    Tela de cadastro<br/>
                    <a href="https://br.freepik.com/vetores/maos">Mãos vetor criado por studiogstock - br.freepik.com</a><br/>
                </Col>
            </Row>

        </Container>
    )
}

export default Fontes;
