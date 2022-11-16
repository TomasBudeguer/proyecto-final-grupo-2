const URLusuario = "http://localhost:4000/apirestaurant/user"
const URLlogin = "http://localhost:4000/apirestaurant/login"


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

export const borrarUsuarioAPI = async (id) => {
  try {
    const respuesta = await fetch(`${URLusuario}/nuevo/${id}`, {
      method: "DELETE",
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

export const editarUsuarioAPI = async (id, datosActualizados) => {
  try {
    const respuesta = await fetch(`${URLusuario}/nuevo/${id}`, {
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
export const crearUsuario = async (usuario) => {
  try {
    console.log(usuario);
    const respuesta = await fetch(URLlogin, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
    return;
  }
};


export const login = async (usuario) =>{
  try{
    //verificar si el usuario existe
    const respuesta = await fetch(URLlogin);
    const listaUsuarios = await respuesta.json();
    //buscar cual usuario tiene mi mail
    const usuarioBuscado = listaUsuarios.find((itemUsuario)=> itemUsuario.email === usuario.email )
    if(usuarioBuscado){
      console.log('email encontrado')
      //verificar el password
      if(usuarioBuscado.password === usuario.password ){
        return usuarioBuscado
      }
    }else{
      console.log('el mail no existe')
      return
    }
  }catch(error){
    console.log('errores en el login')
    return
  }
}