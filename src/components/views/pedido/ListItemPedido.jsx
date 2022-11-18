import { ListGroup, Button, Col } from "react-bootstrap";

const ListItemPedido = ({producto, borrarItem}) => {
    return (
      <Col sm={12} md={6} lg={4}>
        <ListGroup.Item className="d-flex justify-content-between rounded mb-2">
      {producto}
      <Button variant="danger" onClick={()=> borrarItem(producto)}>Borrar</Button>
    </ListGroup.Item>
      </Col>
    );
};

export default ListItemPedido;