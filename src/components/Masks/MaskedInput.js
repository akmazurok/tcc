import React, { useState } from 'react';
import FormControl from 'react-bootstrap/FormControl';
import PropTypes from 'prop-types';

//ARQUIVO DE EXEMPLO - DELETAR DEPOIS
//CRIAR UM INPUT QUE TENHA MASCARAS PAA USAR EM QUALQUER CAMPO

const MaskedInput = (props) => {
   
    const TYPES = {
        CPF: "999.999.999-999",
        CNPJ: "99.999.999/9999-99",
    };

    const { onChange } = props;
    const [value, setValue] = useState(props.value);
    const [mask, setMask] = useState(props.type);

 

    if (value) {
        setValue(applyMask(value, TYPES[mask]));
    }

   
    function applyMask(value, mask) {
        let result = "";

        let inc = 0;
        Array.from(value).forEach((letter, index) => {
            if (!mask[index + inc].match(/[0-9]/)) {
                result += mask[index + inc];
                inc++;
            }
            result += letter;
        });
        return result;
    };

     function handleChange(ev) {
        let value = ev.target.value;
        const mask = ev.target.type;
        
        value = applyMask(value, TYPES[mask]);
    
        ev.target.value = value;
    
        onChange(ev, mask);
     
    };
   
    return (
        <div>
            <FormControl {...props}
                type={mask}
                value={value}
                onChange={handleChange}
            />
        </div>
    );
};

MaskedInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};

export default MaskedInput;
