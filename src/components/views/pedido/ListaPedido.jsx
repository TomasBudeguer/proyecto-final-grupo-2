import { Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import ListItemPedido from "./ListItemPedido";

const ListaPedido = ({ menuPedido,borrarItem}) => {
  return (
    <ListGroup>
      {menuPedido.map((producto, posicion) => (
        <ListItemPedido key={posicion} producto={producto} borrarItem={borrarItem}></ListItemPedido>
      ))}
    </ListGroup>
  );
};

export default ListaPedido;
