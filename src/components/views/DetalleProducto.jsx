import { Card, Badge, Row, Col, Container } from "react-bootstrap";

const DetalleProducto = () => {
    return (
        <Container className="my-4 mainSection">
      <h5 className="text-center display-5 mb-3">Nombre producto</h5>
      <Card>
        <Card.Body>
          <Row>
            <Col sm={12} md={4}>
              <img src='imagen' alt='nombre de la imagen' className="w-100" />
            </Col>
            <Col sm={12} md={8}>
              <div className="d-flex justify-content-between">
                <Card.Title className="mt-1 fs-4">Nombre producto</Card.Title>
                <aside>
                  <Badge bg="success">Categoria</Badge>
                </aside>
              </div>
              <hr />
              <Card.Text>Precio:</Card.Text>
              <Card.Text>Descripcion: </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
    );
};

export default DetalleProducto;