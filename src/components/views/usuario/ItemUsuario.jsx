const ItemUsuario = ({ usuario }) => {
  return (
    <tr>
      <td>{usuario.nombreUsuario}</td>
      <td>{usuario.email}</td>
    </tr>
  );
};

export default ItemUsuario;
