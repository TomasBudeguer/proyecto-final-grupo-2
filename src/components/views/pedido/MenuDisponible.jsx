// import { useState } from "react";
// import { Col, Card, Badge, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// const MenuDisponible = ({ producto }) => {
//   const [menuPedido, setMenuPedido] = useState([]);

//   const agregarMenu = () => {
//     setMenuPedido([...menuPedido, producto.nombreProducto]);
//   };

//   return (
//     <Col sm={12} md={3} lg={2}>
//       <Card className="mb-4">
//         <Card.Img variant="top" src={producto.imagen} />
//         <Card.Body>
//           <Card.Title className="text-center">
//             "{producto.nombreProducto}"
//           </Card.Title>
//           <Card.Subtitle className="text-center">
//             Precio: ${producto.precio}
//           </Card.Subtitle>
//           <aside className="text-center">
//             <Badge bg="success"> {producto.categoria}</Badge>
//           </aside>
//         </Card.Body>
//         <Card.Footer className="text-center">
//           <Button onClick={agregarMenu}>Agregar al pedido</Button>
//         </Card.Footer>
//       </Card>
//     </Col>
//   );
// };

// export default MenuDisponible;
