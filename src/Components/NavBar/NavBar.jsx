import "./NavBar.scss";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import { Search } from "react-bootstrap-icons";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  const links = [
    { name: "Procesadores", url: "/category/procesadores" },
    { name: "Placas de Video", url: "/category/placas_de_video" },
    { name: "Motherboards", url: "/category/motherboards" }
  ];

  return (
    <Navbar key={"xl"} bg="light" expand={"xl"}>
      <Container fluid>
        <Navbar.Toggle aria-controls={"offcanvasNavbar-expand-xl"} />
        <Link to="/">
          <Navbar.Brand className="fw-bold">
            tecno<span className="header-logo">City</span>
          </Navbar.Brand>
        </Link>
        <Navbar.Offcanvas
          id={"offcanvasNavbar-expand-xl"}
          aria-labelledby={"offcanvasNavbarLabel-expand-xl"}
          placement="start"
        >
          <Offcanvas.Header closeButton>
            <Link to="/">
              <Offcanvas.Title id={"offcanvasNavbarLabel-expand-xl"}>
                tecno<span className="header-logo">City</span>
              </Offcanvas.Title>
            </Link>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {/* <Nav.Link><Link to="/productos">Gaming</Link></Nav.Link> */}

              <NavDropdown
                title="Productos"
                id={"offcanvasNavbarDropdown-expand-xl"}
              >
                {links.map((link, i) => {
                  return (
                    <NavDropdown.Item>
                      <Link to={link.url}>{link.name}</Link>
                    </NavDropdown.Item>
                  );
                })}
                <NavDropdown.Divider />
                <NavDropdown.Item><Link to='/category'>Todos</Link></NavDropdown.Item>
              </NavDropdown>

              <Nav.Link>
                <Link to="/contacto">Contacto</Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Buscar"
                className="me-1"
                aria-label="Search"
              />
              <Button
                className="no-border shadow-none"
                variant="outline-primary"
              >
                <Search />
              </Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>

        <CartWidget />
      </Container>
    </Navbar>
  );
}

export default NavBar;
