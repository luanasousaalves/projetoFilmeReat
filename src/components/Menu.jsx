import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="md-3">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/filmespopulares">FilmesPopulares</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Menu