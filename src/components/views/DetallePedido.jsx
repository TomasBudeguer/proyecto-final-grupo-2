import { Card, Badge, Container } from "react-bootstrap";

const DetallePedido = () => {
  return (
    <Container className="my-4 mainSection">
      <h5 className="text-center display-5 mb-3">Pedido de: </h5>
      <Card>
        <Card.Header>
          <Card.Title className=" fs-4">Pedido a nombre de:</Card.Title>
        </Card.Header>
        <Card.Body>
          <Badge bg="success fs-6 mb-2 ">Estado</Badge>
          <Card.Text>Pedido:</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default DetallePedido;
