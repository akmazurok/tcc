import React from 'react'
import FormCnpj from './FormCnpj';
import FormCpf from './FormCpf';

const RegisterForm = (props) => {


    if (props.value === "cpf") {
        return (
            <div><FormCpf /></div>
        );
    }
    else if (props.value === "cnpj") {
        return (
            <div><FormCnpj /></div>
        );
    }

    else {
        return (
            <></>
        );
    }
}

export default RegisterForm;
