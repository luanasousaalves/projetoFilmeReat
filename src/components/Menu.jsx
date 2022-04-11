import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" className="md-3">
        <Container>
          <Navbar.Brand href="/">Filmes Populares</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/filmeslancamentos">FilmesLançamentos</Link>
            <Link className="nav-link" to="/filmesCartaz">FilmesCartaz</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;