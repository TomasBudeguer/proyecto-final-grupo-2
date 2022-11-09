import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ItemPedido = () => {
    return (
        <tr >
      <td>123</td>
      <td>RollingUser</td>
      <td>1 pizza</td>
      <td>pendiente</td>
      <td>
        <Link className="btn btn-success me-2 mb-1" to={`/administrador`}>
          Editar
        </Link>
        <Button variant="danger" className="mb-1">
          Borrar
        </Button>
      </td>
    </tr>
    );
};

export default ItemPedido;