import { Navigate } from "react-router-dom";
import { userAdmin } from "../helpers/queriesUsuarios";

const RutasProtegidas = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("tokenUsuario")) || null;
  if (!token || token.email != userAdmin.email) {
    return <Navigate to={"/"}></Navigate>;
  } else {
    return children;
  }
};

export default RutasProtegidas;
