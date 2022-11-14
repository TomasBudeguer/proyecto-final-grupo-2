import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { listarProductosSaladosAPI } from "../../../helpers/queries";
import CardProducto from "../CardProducto";

const Salados = () => {
    const [ProdSalados, setProdSalados] = useState([])
    useEffect(()=>{
        listarProductosSaladosAPI().then((respuesta)=>{
            setProdSalados(respuesta)
        })
    },[])
  return (
    <Container>
      <h2>Productos Salados</h2>
      <hr />
      <Row>
        {ProdSalados.map((producto) => (
              <CardProducto
                key={producto._id}
                producto={producto}
                setProducto={setProdSalados}
              ></CardProducto>
            ))}
      </Row>
    </Container>
  );
};

export default Salados;
