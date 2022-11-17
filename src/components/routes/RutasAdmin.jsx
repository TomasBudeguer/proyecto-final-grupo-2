import { Routes, Route } from "react-router-dom";
import Administrador from "../views/Administrador";
import EditarPedido from "../views/pedido/EditarPedido";
import CrearProducto from "../views/producto/CrearProducto";
import EditarProducto from "../views/producto/EditarProducto";
import EditarUsuario from "../views/usuario/EditarUsuario";


const RutasAdmin = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/crear-producto"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/editar-pedido/:id"
          element={<EditarPedido></EditarPedido>}
        ></Route>
        <Route
          exact
          path="/editar-usuario/:id"
          element={<EditarUsuario></EditarUsuario>}
        ></Route>
        <Route exact path='/editar-producto/:id' element={<EditarProducto></EditarProducto>}></Route>
      </Routes>
    </>
  );
};

export default RutasAdmin;
