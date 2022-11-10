import { Button, Form, Container } from "react-bootstrap";

const CrearPedido = () => {
  return (
    <Container className="my-3 mainSection">
      <div className="mb-5">
        <h3>Menu disponible:</h3>
        <hr />
      </div>
      <h2 className="display-4">Realizar pedido</h2>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="formNombreUsuario">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control type="text" placeholder="Ej: RollingUser" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPedido">
          <Form.Label>Pedido*</Form.Label>
          <Form.Control type="text" placeholder="Ej: 1 Pizza especial" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEstado">
          <Form.Label>Estado</Form.Label>
          <Form.Control type="text" placeholder="Estado del pedido" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Realizar pedido
        </Button>
      </Form>
    </Container>
  );
};

export default CrearPedido;
