import { Container, Row } from "react-bootstrap";
import CardProducto from "./producto/CardProducto";
import CardPedido from "./pedido/CardPedido";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { consultarAPI } from "../helpers/queries";

const Inicio = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      console.log(respuesta);
      setProductos(respuesta);
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
                key={producto.id}
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
          <h2>Pedidos:</h2>
          <hr />
          <Row>
            <CardPedido></CardPedido>
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Inicio;
