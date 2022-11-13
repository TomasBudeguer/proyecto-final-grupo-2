import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  consultarAPI,
  listaPedidosPendientesAPI,
  listaPedidosElaboracionAPI,
  listaPedidosListosAPI,
  listaPedidosCanceladosAPI,
} from "../helpers/queries";
import CardPedido from "./pedido/CardPedido";

const Inicio = () => {
  const [productos, setProductos] = useState([]);
  const [pedidosPendientes, setPedidosPendientes] = useState([]);
  const [pedidosElaboracion, setPedidosElaboracion] = useState([]);
  const [pedidosListos, setPedidosListos] = useState([]);
  const [pedidosCancelados, setPedidosCancelados] = useState([]);

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

  return (
    <div className="mainSection">
      <Container>
        <h1 className="display-4 text-center">Bienvenidos!</h1>
        <hr />
        <div>
          <h2 className="text-center">Nuestros productos disponibles</h2>
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
