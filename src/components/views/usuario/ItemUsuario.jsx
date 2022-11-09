import { Button } from "react-bootstrap";

const ItemUsuario = () => {
  return (
    <tr>
      <td>12</td>
      <td>RollingUser</td>
      <td>rolling@email.com</td>
      <td>12345678</td>
      <td>
        <Button variant="danger" className="mb-1">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuario;
