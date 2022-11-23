import { Button, Form, Container, Col, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { editarProductoAPI, obtenerProductoAPI } from "../../helpers/queries";

const EditarProducto = () => {
  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    obtenerProductoAPI(id).then((respuesta) => {
      if (respuesta.status === 200) {
        setValue("nombreProducto", respuesta.dato.nombreProducto);
        setValue("precio", respuesta.dato.precio);
        setValue("categoria", respuesta.dato.categoria);
        setValue("descripcion", respuesta.dato.descripcion);
        setValue("imagen", respuesta.dato.imagen);
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
      nombreProducto: "",
      precio: 1,
      categoria: "",
      descripcion: "",
      imagen: "",
    },
  });

  const onSubmit = (producto) => {
    editarProductoAPI(id, producto).then((respuesta) => {
      if (respuesta.status === 200) {
        Swal.fire(
          "Producto actualizado",
          "El producto fue actualizado correctamente",
          "success"
        );
        navegacion("/administrar");
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
    <div className="backgroundGral mainSection">
    <Container>
      <h2 className="display-4 text-center mt-4">Editar Producto</h2>
      <hr />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <Form.Group className="mb-3" controlId="formNombre">
              <Form.Label>Nombre de producto*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Pizza"
                {...register("nombreProducto", {
                  required: "Este dato es obligatorio",
                  minLength: {
                    value: 2,
                    message: "Debe ingresar como minimo 2 caracteres",
                  },
                  maxLength: {
                    value: 50,
                    message: "Debe ingresar como maximo 50 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreProducto?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Form.Group className="mb-3" controlId="formPrecio">
              <Form.Label>Precio*</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 500"
                {...register("precio", {
                  required: "El precio es un valor requerido",
                  min: {
                    value: 1,
                    message: "El precio como minimo debe ser de $1",
                  },
                  max: {
                    value: 10000,
                    message: "El precio como maximo debe ser de $10000",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.precio?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Form.Group className="mb-3" controlId="formCategoria">
              <Form.Label>Categoria*</Form.Label>
              <Form.Select
                {...register("categoria", {
                  required: "Debe seleccionar una categoria",
                })}
              >
                <option value="">Seleccione una categoria</option>
                <option value="Bebida caliente">Bebida caliente</option>
                <option value="Bebida fria">Bebida fria</option>
                <option value="Dulce">Dulce</option>
                <option value="Ensaldas">Ensaladas</option>
                <option value="Postres">Postres</option>
                <option value="Salado">Salado</option>
                <option value="Tortas">Tortas</option>
                <option value="Tartas">Tartas</option>
              </Form.Select>
              <Form.Text className="text-danger">
                {errors.categoria?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={12} md={6}>
            <Form.Group className="mb-3" controlId="formDescripcion">
              <Form.Label>Descripcion*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Pizza especial"
                {...register("descripcion", {
                  required: "Este dato es obligatorio",
                  minLength: {
                    value: 10,
                    message: "Debe ingresar como minimo 10 caracteres",
                  },
                  maxLength: {
                    value: 500,
                    message: "Debe ingresar como maximo 500 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.descripcion?.message}
              </Form.Text>
            </Form.Group>
          </Col>
          <Col sm={12} md={6}>
            <Form.Group className="mb-3" controlId="formImagen">
              <Form.Label>Imagen URL*</Form.Label>
              <Form.Control
                type="URL"
                placeholder="Ej: https://media.istockphoto.com/photos/cheesy-pepperoni-pizza-picture-id938742222?b=1&k=20"
                {...register("imagen", {
                  required: "La URL de la imagen es obligatoria",
                  pattern: {
                    value: /^https?:\/\/[\w]+(\.[\w]+)+[/#?]?.*$/,
                    message: "Debe ingresar una URL valida",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.imagen?.message}
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Guardar
        </Button>
      </Form>
    </Container>
    </div>
  );
};

export default EditarProducto;
