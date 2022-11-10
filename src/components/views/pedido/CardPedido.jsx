import { Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardPedido = () => {
  return (
    <Col sm={12} md={4} lg={3}>
      <Card className="mb-4">
        <Card.Header>
          <Card.Title>Pedido de: </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Subtitle className="fs-5">
            Estado:
            <Badge bg="success" className="ms-4">
              Listo para retirar
            </Badge>
          </Card.Subtitle>
        </Card.Body>
        <Card.Footer>
          <Link className="btn btn-success" to={`/detalle-pedido/`}>
            Ver detalle del pedido
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardPedido;
