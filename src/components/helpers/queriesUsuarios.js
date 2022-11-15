const URLusuario = "http://localhost:4000/apirestaurant/user"


//Usuarios
export const consultarUsuario = async () => {
  try {
    const respuesta = await fetch(`${URLusuario}/nuevo`);
    const listaUsuarios = await respuesta.json();
    return listaUsuarios;
  } catch (error) {
    console.log(error);
  }
};

export const crearUsuarioAPI = async (usuario) => {
  try {
    const respuesta = await fetch(URLusuario, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarUsuarioAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URLusuario}/${id}`, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerUsuarioAPI = async (id) => {
  try {
    const respuesta = await fetch(URLusuario + "/" + id);
    const usuarioBuscado = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return usuarioBuscado;
  } catch (error) {
    console.log(error);
  }
};

export const editarUsuarioAPI = async (id, datosActualizados) => {
  try {
    const respuesta = await fetch(URLusuario + "/" + id, {
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

//Login