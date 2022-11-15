import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemUsuario = ({usuario, setUsuarios}) => {
  return (
    <tr>
      <td>{usuario._id}</td>
      <td>{usuario.nombreUsuario}</td>
      <td>{usuario.email}</td>
      <td>{usuario.password}</td>
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
