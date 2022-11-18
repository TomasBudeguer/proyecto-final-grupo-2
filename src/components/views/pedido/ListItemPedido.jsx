import { ListGroup, Button } from "react-bootstrap";

const ListItemPedido = ({producto, borrarItem}) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
      {producto}
      <Button variant="danger" onClick={()=> borrarItem(producto)}>Borrar</Button>
    </ListGroup.Item>
    );
};

export default ListItemPedido;