import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { consultarAPI, consultarPedidosAPI } from "../helpers/queries";
import { consultarUsuario } from "../helpers/queriesUsuarios";
import ItemPedido from "./pedido/ItemPedido";
import ItemProducto from "./producto/ItemProducto";
import ItemUsuario from "./usuario/ItemUsuario";

const Administrador = () => {
  const [productos, setProductos] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    consultarAPI().then((respuesta) => {
      setProductos(respuesta);
    });
    consultarPedidosAPI().then((respuesta) => {
      setPedidos(respuesta);
    });
    consultarUsuario().then((respuesta)=> {
      setUsuarios(respuesta);
    }) 
  }, []);

  return (
    <Container className="my-5 mainSection">
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <aside>
            <h2 className="display-4">Productos disponibles</h2>
          </aside>
          <aside>
            <Link className="btn btn-primary" to="/administrar/crear-producto">
              Agregar producto
            </Link>
          </aside>
        </div>
        <hr />
        <Table striped bordered hover responsive>
          <thead className="bg-light border-dark">
            <tr>
              <th>Cod</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Descripcion</th>
              <th>Imagen</th>
              <th>Categoria</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <ItemProducto
                key={producto._id}
                producto={producto}
                setProductos={setProductos}
              ></ItemProducto>
            ))}
          </tbody>
        </Table>
      </div>
      <hr />
      <div>
        <h2 className="display-4">Pedidos</h2>
        <hr />
        <Table striped bordered hover responsive>
          <thead className="bg-light border-dark">
            <tr>
              <th>Cod</th>
              <th>Usuario</th>
              <th>Pedido</th>
              <th>Estado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <ItemPedido
                key={pedido._id}
                pedido={pedido}
                setPedidos={setPedidos}
              ></ItemPedido>
            ))}
          </tbody>
        </Table>
      </div>
      <hr />
      <div>
        <div className="d-flex justify-content-between align-items-center">
          <aside>
            <h2 className="display-4">Usuarios registrados</h2>
          </aside>
          <aside>
            <Link className="btn btn-primary" to="/registro">
              Agregar usuario
            </Link>
          </aside>
        </div>
        <hr />
        <Table striped bordered hover responsive>
          <thead className="bg-light border-dark">
            <tr>
              <th>Cod</th>
              <th>Nombre de usuario</th>
              <th>Email</th>
              <th>Contraseña</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
          {usuarios.map((usuario) => (
              <ItemUsuario
                key={usuario._id}
                usuario={usuario}
                setUsuarios={setUsuarios}
              ></ItemUsuario>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Administrador;
