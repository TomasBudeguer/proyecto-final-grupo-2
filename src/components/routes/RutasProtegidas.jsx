import { Navigate } from "react-router-dom";
import { userAdmin } from "../helpers/queriesUsuarios";



const RutasProtegidas = ({children}) => {
    const token = JSON.parse(localStorage.getItem('tokenUsuario')) || null
    console.log(token)
    //esta vacio el token?
    if(!token || token.email != userAdmin.email){
        // si esta vacio
        return <Navigate to={'/login'}></Navigate>

    }else{
        //si estamos logueados correctamente
        return children;
    }
};

export default RutasProtegidas;