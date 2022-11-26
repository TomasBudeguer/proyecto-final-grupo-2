import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { listarProductosBebidasFriasAPI } from "../../../helpers/queries";
import CardProducto from "../CardProducto";

const BebidaFria = () => {
  const [BebidasFrias, setBebidasFrias] = useState([]);
  useEffect(() => {
    listarProductosBebidasFriasAPI().then((respuesta) => {
      setBebidasFrias(respuesta);
    });
  }, []);
  return (
    <div className="backgroundGral mainSection">
      <Container>
        <h2>Bebidas Frias</h2>
        <hr />
        <Row>
          {BebidasFrias.map((producto) => (
            <CardProducto
              key={producto._id}
              producto={producto}
              setProducto={setBebidasFrias}
            ></CardProducto>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BebidaFria;
