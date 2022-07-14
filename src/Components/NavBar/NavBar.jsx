import './NavBar.scss';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cart, Search } from 'react-bootstrap-icons';

function NavBar() {
  return (
    <header>
        <Navbar key={'xl'} bg="light" expand={'xl'} className="mb-3">
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
                  <NavDropdown
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
                  </NavDropdown>

                  <Nav.Link href="#action2">Contacto</Nav.Link>
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

            <Button className='shadow-none no-border ms-1' variant="outline-primary"><Cart /></Button>

          </Container>
        </Navbar>
    </header>
        
  );
}

export default NavBar;