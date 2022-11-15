import {
  Container,
  Row,
  Form,
  Button,
  Col,
  Card,
  Badge,
} from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  consultarAPI,
  listaPedidosPendientesAPI,
  listaPedidosElaboracionAPI,
  listaPedidosListosAPI,
  listaPedidosCanceladosAPI,
  filtroBusqueda,
} from "../helpers/queries";
import CardPedido from "./pedido/CardPedido";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useForm } from "react-hook-form";
import CardFiltro from "./producto/CardFiltro";

const Inicio = () => {
  const [productos, setProductos] = useState([]);
  const [pedidosPendientes, setPedidosPendientes] = useState([]);
  const [pedidosElaboracion, setPedidosElaboracion] = useState([]);
  const [pedidosListos, setPedidosListos] = useState([]);
  const [pedidosCancelados, setPedidosCancelados] = useState([]);
  const [filtrado, setFiltrado] = useState([]);

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      setProductos(respuesta);
    });
    listaPedidosPendientesAPI().then((respuesta) => {
      setPedidosPendientes(respuesta);
    });
    listaPedidosElaboracionAPI().then((respuesta) => {
      setPedidosElaboracion(respuesta);
    });
    listaPedidosListosAPI().then((respuesta) => {
      setPedidosListos(respuesta);
    });
    listaPedidosCanceladosAPI().then((respuesta) => {
      setPedidosCancelados(respuesta);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    defaultValues: {
      nombreProducto: "",
    },
  });

  const [mostrarBotonX, setmostrarBotonX] = useState(false);

  const onSubmit = (datos) => {
    console.log(datos);
    filtroBusqueda(datos).then((respuesta) => {
      setFiltrado(respuesta);
      setmostrarBotonX(true);
    });
  };

  const borrarFiltrado = () => {
    setFiltrado([]);
    setValue("nombreProducto", "");
    setmostrarBotonX(false);
  };

  const mostrarBoton =
    mostrarBotonX === true ? (
      <Button variant="danger" onClick={borrarFiltrado}>
        <i className="bi bi-x-circle-fill"></i>
      </Button>
    ) : ("");

  return (
    <div className="mainSection">
      <Container>
        <h1 className="display-4 text-center">Bienvenidos!</h1>
        <hr />
        <div>
          <Row className="justify-content-center">
            <Col sm={12} md={12} lg={12}>
              <h2 className="text-center">Nuestros productos disponibles</h2>
            </Col>
            <Col sm={12} md={12} lg={5} className="mb-3">
              <Card>
                <Card.Header>
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                      <Col sm={10} md={8} lg={8}>
                        <Form.Group controlId="formBasicNombreProducto">
                          <Form.Control
                            type="text"
                            placeholder="Nombre del producto"
                            {...register("nombreProducto", {
                              required: "Este dato es obligatorio",
                              minLength: {
                                value: 2,
                                message:
                                  "Debe ingresar como minimo 2 caracteres",
                              },
                              maxLength: {
                                value: 50,
                                message:
                                  "Debe ingresar como maximo 50 caracteres",
                              },
                            })}
                          />
                          <Form.Text className="text-danger">
                            {errors.nombreProducto?.message}
                          </Form.Text>
                        </Form.Group>
                      </Col>
                      <Col sm={2} md={4} lg={4}>
                        <div className="text-center">
                          <Button
                            variant="primary"
                            type="submit"
                            className="me-2"
                          >
                            Buscar
                          </Button>
                          {mostrarBoton}
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Card.Header>
                <Row className="justify-content-center">
                  {filtrado.map((producto) => (
                    <CardFiltro
                      key={producto._id}
                      producto={producto}
                      setProductos={setProductos}
                    ></CardFiltro>
                  ))}
                </Row>
              </Card>
            </Col>
          </Row>
          <hr />
          <Row>
            {productos.map((producto) => (
              <CardProducto
                key={producto._id}
                producto={producto}
                setProductos={setProductos}
              ></CardProducto>
            ))}
          </Row>
        </div>
        <hr />
        <section>
          <div className="d-flex flex-column align-items-center">
            <aside>
              <h2>¿Queres realizar tu pedido?</h2>
            </aside>
            <aside>
              <Link className="btn btn-success" to={`/crear-pedido`}>
                Realizar pedido
              </Link>
            </aside>
          </div>
          <h2>Pedidos pendientes</h2>
          <hr />
          <Row>
            {pedidosPendientes.map((pedido) => (
              <CardPedido
                key={pedido._id}
                pedido={pedido}
                setPedidos={setPedidosPendientes}
              ></CardPedido>
            ))}
          </Row>
          <h2>Pedidos en elaboracion</h2>
          <hr />
          <Row>
            {pedidosElaboracion.map((pedido) => (
              <CardPedido
                key={pedido._id}
                pedido={pedido}
                setPedidos={setPedidosElaboracion}
              ></CardPedido>
            ))}
          </Row>
          <h2>Pedidos listos para retirar</h2>
          <hr />
          <Row>
            {pedidosListos.map((pedido) => (
              <CardPedido
                key={pedido._id}
                pedido={pedido}
                setPedidos={setPedidosListos}
              ></CardPedido>
            ))}
          </Row>
          <h2>Pedidos cancelados</h2>
          <hr />
          <Row>
            {pedidosCancelados.map((pedido) => (
              <CardPedido
                key={pedido._id}
                pedido={pedido}
                setPedidos={setPedidosCancelados}
              ></CardPedido>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Inicio;
