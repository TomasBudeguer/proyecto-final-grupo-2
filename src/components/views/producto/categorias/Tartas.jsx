import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { listarProductosTartasAPI } from "../../../helpers/queries";
import CardProducto from "../CardProducto";

const Tartas = () => {
  const [ProdTartas, setProdTartas] = useState([]);
  useEffect(() => {
    listarProductosTartasAPI().then((respuesta) => {
      setProdTartas(respuesta);
    });
  }, []);
  return (
    <div className="backgroundGral mainSection">
      <Container>
        <h2>Productos Tartas</h2>
        <hr />
        <Row>
          {ProdTartas.map((producto) => (
            <CardProducto
              key={producto._id}
              producto={producto}
              setProducto={setProdTartas}
            ></CardProducto>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Tartas;
