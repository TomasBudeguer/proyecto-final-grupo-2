import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemUsuario = () => {
  return (
    <tr>
      <td>12</td>
      <td>RollingUser</td>
      <td>rolling@email.com</td>
      <td>12345678</td>
      <td>
        <Link
          className="btn btn-warning mb-1 me-1"
          to={"/administrar/editar-pedido/:id"}
        >
          Editar
        </Link>
        <Button variant="danger" className="mb-1">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuario;
