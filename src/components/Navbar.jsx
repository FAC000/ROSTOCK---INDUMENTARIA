import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { CartIcon } from './CartIcon';

export function Navegacion() {

  const esconder = () => {
    const navegar = document.getElementById("navbar-collapse")
    navegar.classList.remove('show')

  }


  return (
    <Navbar expand="lg" className="bg-body-tertiary nav">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home">Rostok</Navbar.Brand>



        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navNav">

            <Link to={'/'}>
              <h1 href="#home" onClick={esconder} > </h1>
              Home
            </Link>


            <Link to={'/productos'}>
              <h1 href="#productos" onClick={esconder}></h1>
              Productos
            </Link>

          </Nav>
        </Navbar.Collapse>
        <CartIcon />
      </Container>
    </Navbar >
  );
}
