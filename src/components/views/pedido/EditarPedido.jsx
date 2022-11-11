import { Button, Form, Container } from "react-bootstrap";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { editarPedidoAPI, obtenerPedidoAPI } from "../../helpers/queries";

const EditarPedido = () => {
  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    obtenerPedidoAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setValue("nombreUsuario", respuesta.dato.nombreUsuario);
        setValue("pedido", respuesta.dato.pedido);
        setValue("estado", respuesta.dato.estado);
      } else {
        Swal.fire(
          "Ocurrio un error",
          "Intente este paso en unos minutos",
          "error"
        );
      }
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      nombreUsuario: "",
      pedido: "",
      estado: "",
    },
  });

  const onSubmit = (pedido) => {
    editarPedidoAPI(id, pedido).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "Pedido actualizado",
          "El pedido fue actualizado correctamente",
          "success"
        );
        navegacion("/administrador");
      } else {
        Swal.fire(
          "Ocurrio un error",
          "Intente este paso en unos minutos",
          "error"
        );
      }
    });
  };

  return (
    <Container className="my-5 mainSection">
      <h2 className="display-4">Editar pedido</h2>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombreUsuario">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: RollingUser"
            {...register("nombreUsuario", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 6,
                message: "Debe ingresar como minimo 6 caracteres",
              },
              maxLength: {
                value: 20,
                message: "Debe ingresar como maximo 20 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.nombreUsuario?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPedido">
          <Form.Label>Pedido*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: 1 Pizza especial"
            as="textarea"
            style={{ height: "100px" }}
            {...register("pedido", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 3,
                message: "Debe ingresar como minimo 3 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">
            {errors.pedido?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEstado">
          <Form.Label>Estado</Form.Label>
          <Form.Select
            {...register("estado", {
              required: "Debe seleccionar el estado del pedido",
            })}
          >
            <option value="">Seleccione el estado del pedido</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En elaboracion">En elaboracion</option>
            <option value="Listo para retirar">Listo para retirar</option>
          </Form.Select>
          <Form.Text className="text-danger">
            {errors.estado?.message}
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Realizar pedido
        </Button>
      </Form>
    </Container>
  );
};

export default EditarPedido;
