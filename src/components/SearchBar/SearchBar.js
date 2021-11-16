import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './styles.css';

const SearchBar = () => {
    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Buscar..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2">
            </FormControl>
            <InputGroup.Text>
            <a href="/"><FaSearch size={18} /></a>
            </InputGroup.Text>
        </InputGroup >
    );

}

export default SearchBar