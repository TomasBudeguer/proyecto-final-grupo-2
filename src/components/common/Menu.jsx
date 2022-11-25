import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import { userAdmin } from "../helpers/queriesUsuarios";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();
  const logout = () => {
    localStorage.removeItem("tokenUsuario");
    setUsuarioLogueado({});
    navegacion("/");
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="https://thekitchen.io/wp-content/uploads/2020/11/thekitchen_logo.png"
            height="40px"
            className="w-100"
            alt="the kitchen"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-warning"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/productos-salados">
                Salados
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/productos-bebidas-calientes">
                Bebida Caliente
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/productos-bebida-fria">
                Bebida Fria
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/productos-dulce">
                Dulce
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/productos-ensaladas">
                Ensaladas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/productos-postres">
                Postres
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/productos-tortas">
                Tortas
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/productos-tartas">
                Tartas
              </NavDropdown.Item>
            </NavDropdown>
            {usuarioLogueado.email === userAdmin.email &&
            usuarioLogueado.password === userAdmin.password ? (
              <>
                <Nav.Link as={Link} to="/administrar">
                  Administrador
                </Nav.Link>
                <Nav.Link as={Link} to="/perfil">
                  <i className="bi bi-lock-fill"></i>{" "}
                  {usuarioLogueado.nombreUsuario}
                </Nav.Link>
                <Button variant="dark" onClick={logout}>
                  Desconectarse
                </Button>
              </>
            ) : (
              <>
                {usuarioLogueado.email ? (
                  <>
                    <Nav.Link as={Link} to="/perfil">
                      <i className="bi bi-person-circle"></i>{" "}
                      {usuarioLogueado.nombreUsuario}
                    </Nav.Link>
                    <Button variant="dark" onClick={logout}>
                      Desconectarse
                    </Button>
                  </>
                ) : (
                  <>
                    <Nav.Link as={Link} to="/login">
                      Login
                    </Nav.Link>
                    <Nav.Link as={Link} to="/registro">
                      Registro
                    </Nav.Link>
                  </>
                )}
              </>
            )}
            {/* {usuarioLogueado.email ? (
              <>
                // <Nav.Link as={Link} to="/administrador">
                //   Administrador
                // </Nav.Link>
                <Button variant="dark" onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
                <Nav.Link as={Link} to="/registro">
                  Registro
                </Nav.Link>
              </>
            )} */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
