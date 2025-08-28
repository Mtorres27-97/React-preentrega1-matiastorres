import CartWidget from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../css/NavBar.css"
import { NavLink } from 'react-router-dom';


function NavBarBS() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar" >
      <Container>
        <navbar-brand as={Navlink} to='/'>
          <img src="./Logo-tecnocare.png" alt="logo" className="logo" />
        </navbar-brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-links">
            <Nav.Link as={NavLink} to={'/'}>Inicio</Nav.Link>
            <Nav.Link as={NavLink} to={'/categorias/Productos'}>Productos</Nav.Link>
            <NavDropdown title="Categorias" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to={'/categories/Componentes'}>Componentes de PC</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to={'/categorias/SmartHome'}>SmartHome</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to={'/categorias/Gaming'}>Gaming</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>

          </Nav>
        </Navbar.Collapse>

      </Container>
      <CartWidget />
    </Navbar>
  );
}

export default NavBarBS
