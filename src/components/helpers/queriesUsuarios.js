// const URLusuario = "http://localhost:4000/apirestaurant/user"; //bd local
const URLusuario = process.env.REACT_APP_API_REST_USUARIOS;

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
    const respuesta = await fetch(`${URLusuario}/nuevo`, {
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

export const obtenerUsuarioAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URLusuario}/nuevo/${id}`);
    const usuarioBuscado = {
      dato: await respuesta.json(),
      status: respuesta.status,
    };
    return usuarioBuscado;
  } catch (error) {
    console.log(error);
  }
};

export const userAdmin = {
  email: "admin@resto.com",
  password: "$2a$10$d56z1hgodwcNT3QV9hKJBeQsOtrackD54BNcyF/QB6mMchSp4JUV6",
};

export const login = async (usuario) => {
  try {
    const respuesta = await fetch(`${URLusuario}/usuario`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    const datos = await respuesta.json();
    return {
      status: respuesta.status,
      mensaje: datos.mensaje,
      nombreUsuario: datos.nombreUsuario,
      uid: datos.uid,
      email: datos.email,
      password: datos.password,
    };
  } catch (error) {
    console.log("errores en el login");
    return;
  }
};
