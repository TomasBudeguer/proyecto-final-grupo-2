import { Form, Button, Container, Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { login } from "../helpers/queriesUsuarios";

const Login = ({ setUsuarioLogueado }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    login(data).then((respuesta) => {
      if (respuesta) {
        localStorage.setItem("tokenUsuario", JSON.stringify(respuesta));
        setUsuarioLogueado(respuesta);
        navigate("/");
      } else {
        Swal.fire("Error", "Nombre de usuario o password incorrecto", "error");
      }
    });
  };

  return (
    <div className="backgroundGral mainSection">
      <Container>
        <Row className="justify-content-center">
          <Col sm={12} md={10} lg={7}>
          <Card className="my-3">
              <Card.Header as="h5">Ingrese a su cuenta</Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese un email"
                      {...register("email", {
                        required: "El mail es obligatorio",
                        minLength: {
                          value: 8,
                          message: "Debe ingresar un mínimo de 8 caracteres",
                        },
                        maxLength: {
                          value: 50,
                          message: "Debe ingresar como máximo 50 caracteres",
                        },
                        pattern:
                          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                      })}
                    />
                    <Form.Text className="text-danger">
                      {errors.usuario?.message}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Contraseña"
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
                  <div className="mb-3 text-primary">
                    <Link to={"/registro"} className="text-primary">
                      ¿Todavia no tienes tu cuenta? Clickea aqui
                    </Link>
                  </div>
                  <Button variant="warning" type="submit">
                    Ingresar
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center my-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT65KMx4k0jm3Qqszjo4hGzgBg4p5eShiHFjQ&usqp=CAU"
              height=""
              alt="the kitchen"
            />
          </div>
           
      </Container>
    </div>
  );
};

export default Login;
