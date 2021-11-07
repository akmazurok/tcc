import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                   <NavLink to="/login" activeStyle>
                       Item 1
                   </NavLink>
                   <NavLink to="/login" activeStyle>
                       Item 2
                   </NavLink>
                   <NavLink to="/login" activeStyle>
                       Item 3
                   </NavLink>
                   <NavLink to="/login" activeStyle>
                       Item 4
                   </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/login">Entrar</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar;
