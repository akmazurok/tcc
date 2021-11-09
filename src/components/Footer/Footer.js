import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>Rodape</p>
             <nav>
                <Link to="/">Home</Link>
            </nav>
        </div>
    )
}

export default Footer;
