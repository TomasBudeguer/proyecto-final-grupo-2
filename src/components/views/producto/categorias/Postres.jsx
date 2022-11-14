import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { listarProductosPostresAPI } from "../../../helpers/queries";
import CardProducto from "../CardProducto";

const Postres = () => {
    const [ProdPostres, setProdPostres] = useState([])
    useEffect(()=>{
        listarProductosPostresAPI().then((respuesta)=>{
            setProdPostres(respuesta)
        })
    },[])
  return (
    <Container>
      <h2>Productos Postres</h2>
      <hr />
      <Row>
      {ProdPostres.map((producto) => (
              <CardProducto
                key={producto._id}
                producto={producto}
                setProducto={setProdPostres}
              ></CardProducto>
            ))} 
      </Row>
    </Container>
  );
};

export default Postres;