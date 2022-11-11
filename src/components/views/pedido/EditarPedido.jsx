import { Button, Form, Container } from "react-bootstrap";

const EditarPedido = () => {
  return (
    <Container className="my-5 mainSection">
      <h2 className="display-4">Editar pedido</h2>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="formNombreUsuario">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control type="text" placeholder="Ej: RollingUser" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPedido">
          <Form.Label>Pedido*</Form.Label>
          <Form.Control type="text" placeholder="Ej: 1 Pizza especial" as="textarea"
            style={{ height: "100px" }}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEstado">
          <Form.Label>Estado</Form.Label>
          <Form.Select>
            <option value="">Seleccione el estado del pedido</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En elaboracion">En elaboracion</option>
            <option value="Listo para retirar">Listo para retirar</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Realizar pedido
        </Button>
      </Form>
    </Container>
  );
};

export default EditarPedido;
