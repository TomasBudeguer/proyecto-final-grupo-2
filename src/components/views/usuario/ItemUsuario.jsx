import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {

  consultarUsuario, borrarUsuarioAPI
} from "../../helpers/queriesUsuarios";

const ItemUsuario = ({ usuario, setUsuarios }) => {
  const borrarUsuario = () => {
    Swal.fire({
      title: "¿Esta seguro de eliminar el usuario?",
      text: "No se puede revertir este paso!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // realizar la consulta a la API
        borrarUsuarioAPI(usuario._id).then((respuesta) => {
          if (respuesta.status === 200) {
            // actualizar el state Usuario o la tabla
            consultarUsuario().then((respuesta) => {
              setUsuarios(respuesta);
            });

            Swal.fire(
              "Usuario eliminado!",
              "El usuario fue correctamnete eliminado.",
              "success"
            );
          } else {
            Swal.fire(
              "Se produjo un error!",
              "Intente realizar esta operacion mas tarde.",
              "error"
            );
          }
        });
      }
    });
  };
  return (
    <tr>
      <td>{usuario._id}</td>
      <td>{usuario.nombreUsuario}</td>
      <td>{usuario.email}</td>
      <td>{usuario.password}</td>
      <td>
        {/* <Link
          className="btn btn-warning mb-1 me-1"
          to={`/administrar/editar-usuario/${usuario._id}`}
        >
          Editar
        </Link> */}
        <Button variant="danger" className="mb-1" onClick={borrarUsuario}>
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default ItemUsuario;
