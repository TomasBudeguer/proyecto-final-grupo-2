import { Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = () => {
  return (
    <Col sm={12} md={4} lg={3}>
      <Card className="mb-4">
        <Card.Img variant="top" src="imagen de producto" />
        <Card.Body>
          <Card.Title className="text-center">Nombre del producto</Card.Title>
          <div className="d-flex justify-content-between mb-2">
            <aside>
              <Card.Text>Precio:</Card.Text>
            </aside>
            <aside>
              <Badge bg="success">Categoria</Badge>
            </aside>
          </div>
          <Card.Text>Descripcion: </Card.Text>
          <hr />
          <Link className="btn btn-success" to={`/detalle-producto/`}>
            Ver detalle
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
