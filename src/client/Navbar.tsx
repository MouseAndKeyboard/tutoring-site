import React, { useState } from 'react'

import {Container, Navbar, Nav, NavbarBrand, NavbarToggler, Collapse, NavLink} from 'reactstrap';

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar collapseOnSelect expand="lg" color="dark" dark>
            <Container className="width">
                <NavbarBrand href="#home">BPhil Tutor Gang</NavbarBrand>
                <NavbarToggler aria-controls="responsive-navbar-nav" onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavLink href="#hire">Hire a Tutor</NavLink>
                        <NavLink href="#apply">Become a Tutor</NavLink>
                    </Nav>
                    <Nav navbar>
                        <NavLink href="#about">About us</NavLink>
                        <NavLink href="#contact">Contact us</NavLink>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;