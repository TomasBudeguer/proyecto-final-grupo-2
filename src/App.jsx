import "bootstrap/dist/css/bootstrap.min.css";
import "./components/app.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalleProducto from "./components/views/DetalleProducto";
import Inicio from "./components/views/Inicio";
import Login from "./components/views/Login";
import Registro from "./components/views/Registro";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import CrearPedido from "./components/views/pedido/CrearPedido";
import DetallePedido from "./components/views/DetallePedido";
import Error404 from "./components/views/Error404";
import Salados from "./components/views/producto/categorias/Salados";
import BebidaCaliente from "./components/views/producto/categorias/BebidaCaliente";
import BebidaFria from "./components/views/producto/categorias/BebidaFria";
import Dulce from "./components/views/producto/categorias/Dulce";
import Ensaladas from "./components/views/producto/categorias/Ensaladas";
import Postres from "./components/views/producto/categorias/Postres";
import Tortas from "./components/views/producto/categorias/Tortas";
import Tartas from "./components/views/producto/categorias/Tartas";
import { useState } from "react";
import Perfil from "./components/views/usuario/Perfil";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
import AboutUs from "./components/views/AboutUs";

function App() {
  const usuario = JSON.parse(localStorage.getItem("tokenUsuario")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio usuarioLogueado={usuarioLogueado}></Inicio>}></Route>

        <Route
          exact
          path="/detalle-producto/:id"
          element={<DetalleProducto></DetalleProducto>}
        ></Route>

        <Route
          exact
          path="/detalle-pedido/:id"
          element={<DetallePedido></DetallePedido>}
        ></Route>
        <Route
          exact
          path="/crear-pedido"
          element={
            <CrearPedido usuarioLogueado={usuarioLogueado}></CrearPedido>
          }
        ></Route>

        <Route
          exact
          path="/perfil"
          element={<Perfil usuarioLogueado={usuarioLogueado}></Perfil>}
        ></Route>
        <Route
          exact
          path="/productos-salados"
          element={<Salados></Salados>}
        ></Route>
        <Route
          exact
          path="/productos-bebidas-calientes"
          element={<BebidaCaliente></BebidaCaliente>}
        ></Route>
        <Route
          exact
          path="/productos-bebida-fria"
          element={<BebidaFria></BebidaFria>}
        ></Route>
        <Route exact path="/productos-dulce" element={<Dulce></Dulce>}></Route>
        <Route
          exact
          path="/productos-ensaladas"
          element={<Ensaladas></Ensaladas>}
        ></Route>
        <Route
          exact
          path="/productos-postres"
          element={<Postres></Postres>}
        ></Route>
        <Route
          exact
          path="/productos-tortas"
          element={<Tortas></Tortas>}
        ></Route>
        <Route
          exact
          path="/productos-tartas"
          element={<Tartas></Tartas>}
        ></Route>
        <Route
          exact
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
        ></Route>
        <Route exact path="/registro" element={<Registro></Registro>}></Route>
        <Route exact path="/menu" element={<Menu></Menu>}></Route>
        <Route exact path="/footer" element={<Footer></Footer>}></Route>
        <Route exact path="/AboutUs" element={<AboutUs></AboutUs>}></Route>
        <Route path="/administrar/*" element={<RutasProtegidas>
          <RutasAdmin></RutasAdmin>
        </RutasProtegidas>}></Route>
        <Route exact path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
