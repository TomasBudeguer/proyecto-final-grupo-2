const ItemUsuario = ({ usuario }) => {
  return (
    <tr>
      <td>{usuario._id}</td>
      <td>{usuario.nombreUsuario}</td>
      <td>{usuario.email}</td>
      <td>{usuario.password}</td>
    </tr>
  );
};

export default ItemUsuario;
