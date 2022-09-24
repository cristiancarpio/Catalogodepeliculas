import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
        <Container fluid>
            <Link to ="/" className='navbar-brand'> Inicio</Link>
            <Nav className='me-auto'>
                <Link to="/nuevo" className='nav-link'>nuevo</Link>
            </Nav>
        </Container>

    </Navbar>
  )
}

export default NavBar;