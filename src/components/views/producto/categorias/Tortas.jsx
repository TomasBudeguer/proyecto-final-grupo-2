import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { listarProductosTortasAPI } from "../../../helpers/queries";
import CardProducto from "../CardProducto";

const Tortas = () => {
    const [ProdTortas, setProdTortas] = useState([])
    useEffect(()=>{
        listarProductosTortasAPI().then((respuesta)=>{
            setProdTortas(respuesta)
        })
    },[])
  return (
    <div className="backgroundGral mainSection">
    <Container>
      <h2>Productos Tortas</h2>
      <hr />
      <Row>
        {ProdTortas.map((producto) => (
              <CardProducto
                key={producto._id}
                producto={producto}
                setProducto={setProdTortas}
              ></CardProducto>
            ))}
      </Row>
    </Container>
    </div>
  );
};

export default Tortas;