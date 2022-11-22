import { useEffect, useState } from "react";
import { Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { consultarPedidosPersonalesAPI } from "../../helpers/queries";
import CardPedido from "../pedido/CardPedido";

const Perfil = ({ usuarioLogueado }) => {
  const [pedidosPersonales, setPedidosPersonales] = useState([]);

  useEffect(() => {
    consultarPedidosPersonalesAPI({
      nombreUsuario: usuarioLogueado.nombreUsuario,
    }).then((respuesta) => {
      setPedidosPersonales(respuesta);
    });
  }, []);

  return (
    <div className="backgroundGral mainSection">
      <Container>
        <h2 className="display-3 text-center">Perfil</h2>
        <Card className="text-center mt-3">
          <Card.Header>
            <i className="bi bi-person-circle fs-1"></i>
          </Card.Header>
          <Card.Body>
            <Card.Title>{usuarioLogueado.nombreUsuario}</Card.Title>
            <Card.Text>Email: {usuarioLogueado.email}</Card.Text>
          </Card.Body>
        </Card>
        <Card className="mt-5">
          <Card.Header>
            <h2 className="text-center">Historial de Pedidos</h2>
          </Card.Header>
          <Card.Body>
            {pedidosPersonales.length === 0 ? (<h2 className="display-6 text-center">
                  No hay pedidos cargados en su historial...
                </h2>):(<><Row>
              {pedidosPersonales.map((pedido) => (
                <CardPedido
                  key={pedido._id}
                  pedido={pedido}
                  setPedidos={setPedidosPersonales}
                ></CardPedido>
              ))}
            </Row></>)}
          </Card.Body>
        </Card>
        <div className="d-flex flex-column align-items-center my-4">
            <aside>
              <h2>¿Queres realizar tu pedido?</h2>
            </aside>
            <aside>
              <Link className="btn btn-success" to={`/crear-pedido`}>
                Realizar pedido
              </Link>
            </aside>
          </div>
      </Container>
    </div>
  );
};

export default Perfil;
