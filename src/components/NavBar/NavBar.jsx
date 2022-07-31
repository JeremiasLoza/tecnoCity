import './NavBar.scss';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Search } from 'react-bootstrap-icons';
import CartWidget from './CartWidget';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
        <Navbar key={'xl'} bg="light" expand={'xl'}>
          <Container fluid>
            <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-xl"} />
            <Navbar.Brand className='fw-bold' href="#">tecno<span className='header-logo'>City</span></Navbar.Brand>
            <Navbar.Offcanvas
              id={"offcanvasNavbar-expand-xl"}
              aria-labelledby={"offcanvasNavbarLabel-expand-xl"}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={"offcanvasNavbarLabel-expand-xl"}>
                  tecno<span className='header-logo'>City</span>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                <Nav.Link href="#action1">Gaming</Nav.Link>

                <Nav.Link href="#action2">Accesorios</Nav.Link>

                <Nav.Link href="#action3">Contacto</Nav.Link>

                  {/* <NavDropdown
                    title="Productos"
                    id={"offcanvasNavbarDropdown-expand-xl"}
                  >
                    <NavDropdown.Item href="#action3">Gaming</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Accesorios
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Todos
                    </NavDropdown.Item>
                  </NavDropdown> */}

                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Buscar"
                    className="me-1"
                    aria-label="Search"
                  />
                  <Button className='no-border shadow-none' variant="outline-primary"><Search /></Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <CartWidget />

          </Container>
        </Navbar>
 
  );
}

export default NavBar;