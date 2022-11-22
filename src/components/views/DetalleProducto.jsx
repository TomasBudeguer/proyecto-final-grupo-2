import { Card, Badge, Row, Col, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { obtenerProductoAPI } from "../helpers/queries";
import { useEffect, useState } from "react";

const DetalleProducto = ({ producto }) => {
  const [nombreProducto, setNombreProducto] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const { id } = useParams();

  useEffect(() => {
    obtenerProductoAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setNombreProducto(respuesta.dato.nombreProducto);
        setPrecio(respuesta.dato.precio);
        setImagen(respuesta.dato.imagen);
        setCategoria(respuesta.dato.categoria);
        setDescripcion(respuesta.dato.descripcion);
      } else {
        Swal.fire(
          "Ocurrio un error",
          "Intente este paso en unos minutos",
          "error"
        );
      }
    });
  }, []);

  return (
    <div className="backgroundGral mainSection">
    <Container>
      <h5 className="text-center display-5 mb-3">{nombreProducto}</h5>
      <Card>
        <Card.Body>
          <Row>
            <Col sm={12} md={4}>
              <img src={imagen} alt={nombreProducto} className="w-100" />
            </Col>
            <Col sm={12} md={8}>
              <div className="d-flex justify-content-between">
                <Card.Title className="mt-1 fs-4">{nombreProducto}</Card.Title>
                <aside>
                  <Badge bg="success">{categoria}</Badge>
                </aside>
              </div>
              <hr />
              <Card.Text>Precio: ${precio}</Card.Text>
              <Card.Text>Descripcion: {descripcion}</Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
    </div>
  );
};

export default DetalleProducto;
