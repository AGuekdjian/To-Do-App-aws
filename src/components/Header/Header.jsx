import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ signOut }) {

    return (
        <>
            <Navbar
                color="dark"
                dark
            >
                <NavbarBrand href="/">
                    <img
                        alt="logo"
                        src="/react.svg"
                        style={{
                            height: 40,
                            width: 40
                        }}
                    /></NavbarBrand>
                <Nav className='me-auto'>
                    <NavItem>
                        <NavLink href="/components/">Components</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            GitHub
                        </NavLink>
                    </NavItem>
                </Nav>
                <Button color="danger" onClick={signOut}>
                    Sign Out
                </Button>
            </Navbar>
        </>
    );
}

export default Header;