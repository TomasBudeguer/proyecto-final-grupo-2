import { Row, Col } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-light">
      <Row className="flex-row justify-content-end">
        <Col sm={12} md={4} lg={4} className="text-center">
          <ul>
            <a href="https://github.com/TomasBudeguer">
              <li className="my-2 liFooter">
                <i className="bi bi-github mx-2"></i>
                Tomas Agustin Budeguer
              </li>
            </a>
            <a href="https://github.com/DeepAbyssGG">
              <li className="my-2 liFooter">
                <i className="bi bi-github mx-2"></i>
                Nicolas Gomez Marigliano
              </li>
            </a>
            <a href="https://github.com/jlgm-juss">
              <li className="my-2 liFooter">
                <i className="bi bi-github mx-2"></i>
                Jose Luis Gomez Marigliano
              </li>
            </a>
          </ul>
        </Col>

        <Col sm={12} md={4} lg={4}>
          <div className="text-center my-4">
            <img
              src="https://thekitchen.io/wp-content/uploads/2020/11/thekitchen_logo.png"
              height="40px"
              alt="the kitchen"
            />
          </div>
        </Col>

        <Col sm={12} md={4} lg={4} className="text-center">
          <ul>
            <Link to="/">
              <li className="my-2 liFooter">Inicio</li>
            </Link>
            <Link to="/aboutUs">
              <li className="my-2 liFooter">Acerca de nosotros</li>
            </Link>
            <Link to="/error404">
              <li className="my-2 liFooter">Terminos y condiciones</li>
            </Link>
          </ul>
        </Col>
      </Row>
      <hr></hr>
      <p className="text-center"> &copy; Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
