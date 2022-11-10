import { Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProducto = ({ producto }) => {
  return (
    <Col sm={12} md={4} lg={3}>
      <Card className="mb-4">
        <Card.Img variant="top" src={producto.imagen} />
        <Card.Body>
          <Card.Title className="text-center">"{producto.nombreProducto}"</Card.Title>
          <div className="d-flex justify-content-between mb-2">
            <aside className="mt-1">
              <Card.Subtitle>Precio: ${producto.precio}</Card.Subtitle>
            </aside>
            <aside>
              <Badge bg="success">{producto.categoria}</Badge>
            </aside>
          </div>
          <Card.Text>Descripcion: {producto.descripcion} </Card.Text>
          <hr />
          <Link className="btn btn-success" to={`/detalle-producto/${producto.id}`}>
            Ver detalle
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProducto;
