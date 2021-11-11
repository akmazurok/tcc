import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './styles.css';
import register from "../../img/register.jpg";

const RegisterScreen = () => {
    const [selectedForm, setSelectedForm] = useState('');
        
    function handleChange(event){
        setSelectedForm(event.target.value);
      
    }

    
    return (
        <Container className="main">
            <img className="image" src={register} alt="register" />
            <h4>Cadastro</h4>

            <Form>
                <Form.Label>Escolha o tipo de cadastro:</Form.Label>
                <Form.Select value={selectedForm} 
                    onChange={handleChange}
                    placeholder="Selecione...">
                    <option>Selecione...</option>
                    <option value="cpf">Estudante</option>
                    <option value="cnpj">Entidade</option>
                </Form.Select>
            </Form>

            <RegisterForm value={selectedForm}/>
            
            
        </Container>
    );
}

export default RegisterScreen;
