import { Card, Container, Button, Form, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { crearUsuarioAPI } from "../helpers/queriesUsuarios";
import emailjs from "@emailjs/browser";


const Registro = () => {
  const navegacion = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    crearUsuarioAPI(data).then((respuesta) => {
      if (respuesta.status === 201) {
        Swal.fire(
          "Usuario creado",
          "El usuario fue creado correctamente",
          "success"
        );
        navegacion("/login");

        let templateParams = {
          from_name: "Kitchen",
          user_name: data.nombreUsuario,
          destinatario: data.email,
          message:
            "Gracias por registrarte en nuestra pagina. Que disfrutes de nuestros servicion!",
        };

        emailjs
          .send("service_78dnuyc", "template_lxfg9cl", templateParams,"l8tte2g0gHI0Mxq7c")
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
      } else {
        Swal.fire("Ocurrio un error", "Vuelva a intentarlo mas tarde", "error");
      }
    });
  };

  return (
    <div className="backgroundGral mainSection">
      <Container className="mainSection">
        <Row className="justify-content-center">
          <Col sm={12} md={10} lg={7}>
            <Card className="my-5">
              <Card.Header as="h5">Crear cuenta</Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3" controlId="formNombreApellido">
                    <Form.Label>Nombre de Usuario</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ej: Pedro"
                      {...register("nombreUsuario", {
                        required: "El nombre de usuario es obligatorio",
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
                      {errors.nombreUsuario?.message}
                    </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="juanperez@gmail.com"
                      {...register("email", {
                        required: "El email es obligatorio",
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
                        required: "El password es obligatorio",
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
                    Crear
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registro;
