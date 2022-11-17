import { Navigate } from "react-router-dom";



const RutasProtegidas = ({children}) => {
    const token = JSON.parse(localStorage.getItem('tokenUsuario')) || null
    //esta vacio el token?
    if(!token){
        // si esta vacio
        return <Navigate to={'/login'}></Navigate>
return 
    }else{
        //si estamos logueados correctamente
        return children;
    }
};

export default RutasProtegidas;