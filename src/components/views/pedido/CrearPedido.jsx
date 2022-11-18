import {
  Button,
  Form,
  Container,
  Row,
  Card,
  Col,
  Badge,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { consultarAPI, crearPedidoAPI } from "../../helpers/queries";
import { useEffect, useState } from "react";
import ListaPedido from "./ListaPedido";
// import MenuDisponible from "./MenuDisponible";

const CrearPedido = ({ usuarioLogueado }) => {
  const [productos, setProductos] = useState([]);

  const [menuPedido, setMenuPedido] = useState([]);

  const agregarMenu = (producto) => {
    setMenuPedido([...menuPedido, " " + producto.nombreProducto]);
  };

  const borrarItem = (producto) => {
    let arregloModificado = menuPedido.filter((item) => item !== producto);
    // actualizo el state
    setMenuPedido(arregloModificado);
  };

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      setProductos(respuesta);
    });
    setValue("pedido", menuPedido);
  }, [menuPedido]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm({
    defaultValues: {
      nombreUsuario: usuarioLogueado.nombreUsuario,
      pedido: "",
      estado: "Pendiente",
    },
  });

  const navegacion = useNavigate();

  const onSubmit = (datos) => {
    crearPedidoAPI(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Pedido realizado",
          "El pedido fue realizado con exito!",
          "success"
        );
        reset();
        navegacion("/");
      } else {
        Swal.fire("Ocurrio un error", "Vuelva a intentarlo mas tarde", "error");
      }
    });
  };

  return (
    <Container className="my-3 mainSection">
      <div className="mb-5">
        <h3>Menu disponible:</h3>
        <Row>
          {productos.map((producto) => (
            <Col sm={12} md={3} lg={2} key={producto._id}>
              <Card className="mb-4">
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                  <Card.Title className="text-center">
                    "{producto.nombreProducto}"
                  </Card.Title>
                  <Card.Subtitle className="text-center">
                    Precio: ${producto.precio}
                  </Card.Subtitle>
                  <aside className="text-center">
                    <Badge bg="success"> {producto.categoria}</Badge>
                  </aside>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button
                    onClick={() => {
                      agregarMenu(producto);
                    }}
                  >
                    Agregar al pedido
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
          {/* <Row>
          {productos.map((producto) => (
            <MenuDisponible
              key={producto._id}
              producto={producto}
              setProductos={setProductos}
            ></MenuDisponible>
          ))}
        </Row> */}
        </Row>
        <ListaPedido
          menuPedido={menuPedido}
          borrarItem={borrarItem}
        ></ListaPedido>
        <hr />
      </div>
      <Card>
        <Card.Header>
          <h2 className="display-4">Realizar pedido</h2>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formNombreUsuario">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: RollingUser"
                disabled
                {...register("nombreUsuario", {
                  required: "Este dato es obligatorio",
                  minLength: {
                    value: 8,
                    message: "Debe ingresar como minimo 8 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "Debe ingresar como maximo 50 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreUsuario?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPedido">
              <Form.Label>
                Pedido* (Agregue la cantidad de productos de forma manual)
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: 1 Pizza especial"
                as="textarea"
                style={{ height: "100px" }}
                {...register("pedido", {
                  required: "Este dato es obligatorio",
                  minLength: {
                    value: 3,
                    message: "Debe ingresar como minimo 3 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.pedido?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEstado">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                placeholder="Estado del pedido"
                disabled
                {...register("estado", {
                  required: "Este dato es obligatorio",
                  minLength: {
                    value: 8,
                    message: "Debe ingresar como minimo 8 caracteres",
                  },
                  maxLength: {
                    value: 20,
                    message: "Debe ingresar como maximo 20 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.estado?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Realizar pedido
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CrearPedido;
