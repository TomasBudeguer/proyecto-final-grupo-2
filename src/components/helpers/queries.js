 //const URL = "http://localhost:3004/productos"; //json-server
const URL = "http://localhost:4000/apirestaurant/prod/productos" //BD-LOCAL
 //const URLpedidos = "http://localhost:3004/pedidos"; //json-server
const URLpedidos = "http://localhost:4000/apirestaurant/ped/pedidos"; //json-server

// PRODUCTOS

export const consultarAPI = async () => {
  try {
    const respuesta = await fetch(URL);
    const listaProductos = await respuesta.json();
    return listaProductos;
  } catch (error) {
    console.log(error);
  }
};

export const crearProductoAPI = async (producto) => {
  try {
    const respuesta = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProductoAPI = async (id) => {
  try {
    const respuesta = await fetch(URL + "/" + id);
    const productoBuscado = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return productoBuscado;
  } catch (error) {
    console.log(error);
  }
};

export const editarProductoAPI = async (id, datosActualizados) => {
  try {
    const respuesta = await fetch(URL + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

// PEDIDOS

export const consultarPedidosAPI = async () => {
  try {
    const respuesta = await fetch(URLpedidos);
    const listaPedidos = await respuesta.json();
    return listaPedidos;
  } catch (error) {
    console.log(error);
  }
};

export const crearPedidoAPI = async (producto) => {
  try {
    const respuesta = await fetch(URLpedidos, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarPedidoAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URLpedidos}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerPedidoAPI = async (id) => {
  try {
    const respuesta = await fetch(URLpedidos + "/" + id);
    const productoBuscado = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return productoBuscado;
  } catch (error) {
    console.log(error);
  }
};

export const editarPedidoAPI = async (id, datosActualizados) => {
  try {
    const respuesta = await fetch(URLpedidos + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosActualizados),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

// pedidos pendiente
export const listaPedidosPendientesAPI = async () => {
  try {
    const respuesta = await fetch(URLpedidos + "-pendientes");
    const pedidosPendientes = await respuesta.json();
    return pedidosPendientes;
  } catch (error) {
    console.log(error);
  }
};

// pedidos en elaboracion
export const listaPedidosElaboracionAPI = async () => {
  try {
    const respuesta = await fetch(URLpedidos + "-elaboracion");
    const pedidosElaboracion = await respuesta.json();
    return pedidosElaboracion;
  } catch (error) {
    console.log(error);
  }
};

// pedidos listos
export const listaPedidosListosAPI = async () => {
  try {
    const respuesta = await fetch(URLpedidos + "-listos");
    const pedidosListos = await respuesta.json();
    return pedidosListos;
  } catch (error) {
    console.log(error);
  }
};

// pedidos cancelados
export const listaPedidosCanceladosAPI = async () => {
  try {
    const respuesta = await fetch(URLpedidos + "-cancelados");
    const pedidosCancelados = await respuesta.json();
    return pedidosCancelados;
  } catch (error) {
    console.log(error);
  }
};

// filtro de busqueda
export const filtroBusqueda = async (producto) => {
  try {
    const respuesta = await fetch(URL + "/filtro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    const productoFiltrado =await respuesta.json()
    return productoFiltrado;
  } catch (error) {
    console.log(error);
  }
};

//producto salados
export const listarProductosSaladosAPI = async () => {
  try {
    const respuesta = await fetch(URL + "-salados");
    const ProductosSalados = await respuesta.json();
    return ProductosSalados;
  } catch (error) {
    console.log(error);
  }
};

//bebidas calientes
export const listarProductosBebidasCalientesAPI = async () => {
  try {
    const respuesta = await fetch(URL + "-bebida-caliente");
    const ProductosBebidasCalientes = await respuesta.json();
    return ProductosBebidasCalientes;
  } catch (error) {
    console.log(error);
  }
};

//bebidas frias
export const listarProductosBebidasFriasAPI = async () => {
  try {
    const respuesta = await fetch(URL + "-bebida-fria");
    const ProductosBebidasFrias = await respuesta.json();
    return ProductosBebidasFrias;
  } catch (error) {
    console.log(error);
  }
};

//dulces
export const listarProductosDulcesAPI = async () => {
  try {
    const respuesta = await fetch(URL + "-dulce");
    const ProductosDulces = await respuesta.json();
    return ProductosDulces;
  } catch (error) {
    console.log(error);
  }
};

//ensaladas
export const listarProductosEnsaladasAPI = async () => {
  try {
    const respuesta = await fetch(URL + "-ensaladas");
    const ProdEnsaladas = await respuesta.json();
    return ProdEnsaladas;
  } catch (error) {
    console.log(error);
  }
};

//postres
export const listarProductosPostresAPI = async () => {
  try {
    const respuesta = await fetch(URL + "-postres");
    const ProdPostres = await respuesta.json();
    return ProdPostres;
  } catch (error) {
    console.log(error);
  }
};

//tortas
export const listarProductosTortasAPI = async () => {
  try {
    const respuesta = await fetch(URL + "-tortas");
    const ProdTortas = await respuesta.json();
    return ProdTortas;
  } catch (error) {
    console.log(error);
  }
};

//tartas
export const listarProductosTartasAPI = async () => {
  try {
    const respuesta = await fetch(URL + "-tartas");
    const ProdTartas = await respuesta.json();
    return ProdTartas;
  } catch (error) {
    console.log(error);
  }
};

