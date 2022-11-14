import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { listarProductosBebidasCalientesAPI } from "../../../helpers/queries";
import CardProducto from "../CardProducto";


const BebidaCaliente = () => {
    const [BebidasCalientes, setBebidasCalientes] = useState([])
    useEffect(()=>{
        listarProductosBebidasCalientesAPI().then((respuesta)=>{
            setBebidasCalientes(respuesta)
        })
    },[])
  return (
    <Container className="mainSection">
      <h2>Bebidas Calientes</h2>
      <hr />
      <Row>
      {BebidasCalientes.map((producto) => (
              <CardProducto
                key={producto._id}
                producto={producto}
                setProducto={setBebidasCalientes}
              ></CardProducto>
            ))} 
      </Row>
    </Container>
  );
};

export default BebidaCaliente;
