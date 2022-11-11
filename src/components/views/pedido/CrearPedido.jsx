import { Button, Form, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { crearPedidoAPI } from "../../helpers/queries";

const CrearPedido = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      nombreUsuario: "",
      pedido: "",
      estado: "Pendiente",
    },
  });

  const navegacion = useNavigate();

  const onSubmit = (datos) => {
    console.log(datos);
    crearPedidoAPI(datos).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Pedido realizado",
          "El pedido fue realizado con exito!",
          "success"
        );
        reset();
        navegacion("/administrador");
      } else {
        Swal.fire("Ocurrio un error", "Vuelva a intentarlo mas tarde", "error");
      }
    });
  };

  return (
    <Container className="my-3 mainSection">
      <div className="mb-5">
        <h3>Menu disponible:</h3>
        <hr />
      </div>
      <h2 className="display-4">Realizar pedido</h2>
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
          <Form.Control
            type="text"
            placeholder="Estado del pedido"
            disabled
            {...register("estado", {
              required: "Este dato es obligatorio",
              minLength: {
                value: 8,
                message: "Debe ingresar como minimo 8 caracteres",
              },
              maxLength: {
                value: 20,
                message: "Debe ingresar como maximo 20 caracteres",
              },
            })}
          />
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

export default CrearPedido;
