import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const ItemProducto = () => {
    return (
        <tr>
      <td>1</td>
      <td>Pizza</td>
      <td>$1000</td>
      <td>Pizza especial</td>
      <td><p className="cortarText">https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?b=1&k=20&m=938742222&s=612x612&w=0&h=As_a78KLnFXJnQJ25BzTOxk_mSThUBMF867kOEFrMyA=</p></td>
      <td>Salado</td>
      <td>
        <Link className="btn btn-success me-2 mb-1" to={`/administrador`}>Editar</Link>
        <Button variant="danger" className="mb-1">
          Borrar
        </Button>
      </td>
    </tr>
    );
};

export default ItemProducto;