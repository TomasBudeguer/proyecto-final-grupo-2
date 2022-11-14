import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { listarProductosTartasAPI } from "../../../helpers/queries";
import CardProducto from "../CardProducto";

const Tartas = () => {
    const [ProdTartas, setProdTartas] = useState([])
    useEffect(()=>{
        listarProductosTartasAPI().then((respuesta)=>{
            setProdTartas(respuesta)
        })
    },[])
  return (
    <Container className="mainSection">
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
  );
};

export default Tartas;