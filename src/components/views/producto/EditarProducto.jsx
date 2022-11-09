import { Button, Form, Container, Col, Row } from "react-bootstrap";

const EditarProducto = () => {
    return (
        <Container className="my-5 mainSection">
      <h2 className="display-4">Editar Producto: (nombre del producto)</h2>
      <hr />
      <Form>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre de producto*</Form.Label>
              <Form.Control type="text" placeholder="Ej: Pizza" />
            </Form.Group>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Form.Group className="mb-3" controlId="formPrecio">
              <Form.Label>Precio*</Form.Label>
              <Form.Control type="number" placeholder="Ej: 500" />
            </Form.Group>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Form.Group className="mb-3" controlId="formCategoria">
              <Form.Label>Categoria*</Form.Label>
              <Form.Select>
                <option value="">Seleccione una categoria</option>
                <option value="Bebida caliente">Bebida caliente</option>
                <option value="Bebida fria">Bebida fria</option>
                <option value="Dulce">Dulce</option>
                <option value="Ensaldas">Ensaladas</option>
                <option value="Postres">Postres</option>
                <option value="Salado">Salado</option>
                <option value="Tortas">Tortas</option>
                <option value="Tartas">Tartas</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col sm={12} md={6}>
            <Form.Group className="mb-3" controlId="formDescripcion">
              <Form.Label>Descripcion*</Form.Label>
              <Form.Control type="text" placeholder="Ej: Pizza especial" />
            </Form.Group>
          </Col>
          <Col sm={12} md={6}>
          <Form.Group className="mb-3" controlId="formImagen">
            <Form.Label>Imagen URL*</Form.Label>
            <Form.Control
              type="URL"
              placeholder="Ej: https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?b=1&k=20"
            />
          </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
    );
};

export default EditarProducto;