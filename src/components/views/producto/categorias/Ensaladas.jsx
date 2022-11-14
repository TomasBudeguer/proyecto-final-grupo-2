import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { listarProductosEnsaladasAPI } from "../../../helpers/queries";
import CardProducto from "../CardProducto";

const Ensaladas = () => {
    const [ProdEnsaladas, setProdEnsaladas] = useState([])
    useEffect(()=>{
        listarProductosEnsaladasAPI().then((respuesta)=>{
            setProdEnsaladas(respuesta)
        })
    },[])
  return (
    <Container>
      <h2>Productos Ensaladas</h2>
      <hr />
      <Row>
      {ProdEnsaladas.map((producto) => (
              <CardProducto
                key={producto._id}
                producto={producto}
                setProducto={setProdEnsaladas}
              ></CardProducto>
            ))} 
      </Row>
    </Container>
  );
};

export default Ensaladas;