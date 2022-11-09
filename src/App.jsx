import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Administrador from './components/views/Administrador';
import DetalleProducto from './components/views/DetalleProducto';
import Inicio from './components/views/Inicio';
import Login from './components/views/Login';
import CrearProducto from './components/views/producto/CrearProducto';
import Registro from './components/views/Registro';
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import EditarProducto from './components/views/producto/EditarProducto';
import CrearPedido from './components/views/pedido/CrearPedido';
import EditarPedido from './components/views/pedido/EditarPedido';
import DetallePedido from './components/views/DetallePedido';
import Error404 from './components/views/Error404';

function App() {
  return (
    <BrowserRouter>
    <Menu></Menu>
    <Routes>
      <Route exact path='/' element={<Inicio></Inicio>}></Route>
      <Route exact path='/administrador' element={<Administrador></Administrador>}></Route>
      <Route exact path='/detalle-producto/:id' element={<DetalleProducto></DetalleProducto>}></Route>
      <Route exact path='/administrar/crear-producto' element={<CrearProducto></CrearProducto>}></Route>
      <Route exact path='/administrar/editar-producto/:id' element={<EditarProducto></EditarProducto>}></Route>
      <Route exact path='/detalle-pedido/:id' element={<DetallePedido></DetallePedido>}></Route>
      <Route exact path='/administrar/crear-pedido' element={<CrearPedido></CrearPedido>}></Route>
      <Route exact path='/administrar/editar-pedido/:id' element={<EditarPedido></EditarPedido>}></Route>
      <Route exact path='/login' element={<Login></Login>}></Route>
      <Route exact path='/registro' element={<Registro></Registro>}></Route>
      <Route exact path='/menu' element={<Menu></Menu>}></Route>
      <Route exact path='/footer' element={<Footer></Footer>}></Route>
      <Route exact path='*' element={<Error404></Error404>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
