import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
const Inicio = () => {
  return (
    <div className="mainSection">
      <Container>
        <h1 className="display-4 text-center">Bienvenidos!</h1>
        <hr />
        <div>
          <h2 className="text-center">Nuestros productos disponibles</h2>
          <Row>
            <CardProducto></CardProducto>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Inicio;
