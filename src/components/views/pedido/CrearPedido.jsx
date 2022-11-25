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
  // const [menuPrecio, setMenuPrecio] = useState([]);
  const [suma, setSuma] = useState("");

  const agregarMenu = (producto) => {
    const prodNuevo = {
      nombreProducto: producto.nombreProducto,
      precio: producto.precio,
    };
    setMenuPedido([...menuPedido, prodNuevo]);
    // setMenuPedido([...menuPedido, ` ${producto.nombreProducto} $${producto.precio}`]);
    // setMenuPrecio([...menuPrecio, producto.precio]);
  };

  const navegacion = useNavigate();

  const borrarItem = (producto) => {
    let arregloModificado = menuPedido.filter((item) => item !== producto);
    setMenuPedido(arregloModificado);
  };

  useEffect(() => {
    if(!localStorage.getItem("tokenUsuario")){
      navegacion("/login");
    }
    consultarAPI().then((respuesta) => {
      setProductos(respuesta);
    });
    const pedidoFinal = menuPedido.map((producto) => producto.nombreProducto);
    setValue("pedido", pedidoFinal);
    const total = menuPedido
      .map((producto) => Number(producto.precio))
      .reduce((a, b) => a + b, 0);
    setSuma(total);
    setValue("total", total);
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
      total: "",
      estado: "Pendiente",
    },
  });


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
    <div className="backgroundGral mainSection">
    <Container className="mt-2 mb-5">
      <div className="mb-5">
        <h3 className="display-4 text-center mb-3">Menu disponible</h3>
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
                    <Badge bg="warning" className="text-dark"> {producto.categoria}</Badge>
                  </aside>
                </Card.Body>
                <Card.Footer className="text-center">
                  <Button variant='success'
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
        {menuPedido.length === 0 ? (
          ""
        ) : (
          <>
            <Card>
              <Card.Header>
                <h3>Productos seleccionados</h3>
              </Card.Header>
              <Card.Body>
                <ListaPedido
                  menuPedido={menuPedido}
                  borrarItem={borrarItem}
                ></ListaPedido>
              </Card.Body>
              <Card.Footer>
                {suma === 0 ? "" : <h3>Total: ${suma}</h3>}
              </Card.Footer>
            </Card>
            <h4 className="text-center display-5">
              <i className="bi bi-arrow-down fs-2">Confirmar su pedido</i>
              <i className="bi bi-arrow-down fs-2"></i>
            </h4>
          </>
        )}
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
              <Form.Label>Pedido*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Presione el boton ''Agregar al pedido'' "
                as="textarea"
                disabled
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
            <Form.Group className="mb-3" controlId="formTotal">
              <Form.Label>Monto total</Form.Label>
              <Form.Control
                type="number"
                placeholder="El total se cargara a medida que usted ingrese productos"
                disabled
                {...register("total", {
                  required: "Este dato es obligatorio",
                  min: {
                    value: 1,
                    message: "El total debe ser como minimo $1",
                  },
                  max: {
                    value: 1000000,
                    message: "El total debe ser como minimo $1000000",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.total?.message}
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
            <Button variant="warning" type="submit">
              Realizar pedido
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    </div>
  );
};

export default CrearPedido;
