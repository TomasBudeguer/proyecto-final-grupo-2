import { Form, Button, Container, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Login = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      console.log(data);
    };
  
    return (
      <Container className="mainSection">
        <Card className="my-5">
          <Card.Header as="h5">Login</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ingrese un email"
                  {...register("usuario", {
                    required: "El nombre de usuario es obligatorio",
                    minLength: {
                        value: 8,
                        message: "Debe ingresar un mínimo de 8 caracteres"
                    },
                    maxLength: {
                        value: 50,
                        message: "Debe ingresar como máximo 50 caracteres"
                    },
                    pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.usuario?.message}
                </Form.Text>
              </Form.Group>
  
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  {...register("password", {
                    required: "El password es obligatorio",
                    minLength: {
                        value: 8,
                        message: "Debe ingresar un mínimo de 8 caracteres"
                    },
                    maxLength: {
                        value: 16,
                        message: "Debe ingresar un máximo de 16 caracteres"
                    }
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.password?.message}
                </Form.Text>
              </Form.Group>
              <div className="mb-3">
                <Link to={"/registro"}>Crear una cuenta</Link>
              </div>
              <Button variant="primary" type="submit">
                Iniciar
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  };
  
  export default Login;

