import { Card, Container, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { editarUsuarioAPI,obtenerUsuarioAPI,} from "../../helpers/queriesUsuarios";
import { useEffect } from "react";

const EditarUsuario = () => {
  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    obtenerUsuarioAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setValue("nombreUsuario", respuesta.dato.nombreUsuario);
        setValue("email", respuesta.dato.email);
        setValue("password", respuesta.dato.password);
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
        email: "",
        password: ""
    }
  });

  

  const onSubmit = (usuario) => {
    editarUsuarioAPI(id, usuario).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "Usuario editado",
          "El usuario fue editado correctamente",
          "success"
        );
        navegacion("/administrador");
      } else {
        Swal.fire("Ocurrio un error", "Vuelva a intentarlo mas tarde", "error");
      }
    });
  };

  return (
    <Container className="mainSection">
      <Card className="my-5">
        <Card.Header as="h5">Editar</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formNombreApellido">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Pedro"
                {...register("nombreUsuario", {
                  required: "El nombre de password es obligatorio",
                  minLength: {
                    value: 8,
                    message: "Debe ingresar un mínimo de 8 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "Debe ingresar un máximo de 50 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombre?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="juanperez@gmail.com"
                {...register("email", {
                  required: "El nombre de password es obligatorio",
                  minLength: {
                    value: 8,
                    message: "Debe ingresar un mínimo de 8 caracteres",
                  },
                  maxLength: {
                    value: 200,
                    message: "Debe ingresar un máximo de 50 caracteres",
                  },
                  pattern:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "El nombre de password es obligatorio",
                  minLength: {
                    value: 8,
                    message: "Debe ingresar un mínimo de 8 caracteres",
                  },
                  maxLength: {
                    value: 16,
                    message: "Debe ingresar un máximo de 16 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
              Editar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EditarUsuario;
