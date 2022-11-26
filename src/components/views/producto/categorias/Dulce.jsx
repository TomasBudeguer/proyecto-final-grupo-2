import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { listarProductosDulcesAPI } from "../../../helpers/queries";
import CardProducto from "../CardProducto";

const Dulce = () => {
  const [ProdDulces, setProdDulces] = useState([]);
  useEffect(() => {
    listarProductosDulcesAPI().then((respuesta) => {
      setProdDulces(respuesta);
    });
  }, []);
  return (
    <div className="backgroundGral mainSection">
      <Container>
        <h2>Productos Dulces</h2>
        <hr />
        <Row>
          {ProdDulces.map((producto) => (
            <CardProducto
              key={producto._id}
              producto={producto}
              setProducto={setProdDulces}
            ></CardProducto>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Dulce;
