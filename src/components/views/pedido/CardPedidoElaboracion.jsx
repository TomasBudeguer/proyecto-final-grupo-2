import { Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardPedidoElaboracion = ({pedido, setPedido}) => {
    return (
      <Col sm={12} md={4} lg={3}>
        <Card className="mb-4">
          <Card.Header>
            <Card.Title>Pedido de: {pedido.nombreUsuario}</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Subtitle className="fs-5">
              Estado:
              <Badge bg="success" className="ms-4">
              {pedido.estado}
              </Badge>
            </Card.Subtitle>
          </Card.Body>
          <Card.Footer>
            <Link className="btn btn-success" to={`/detalle-pedido/${pedido._id}`}>
              Ver detalle del pedido
            </Link>
          </Card.Footer>
        </Card>
      </Col>
    );
  };

export default CardPedidoElaboracion;