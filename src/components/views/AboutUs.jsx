import { Container, Row, Col, Card } from "react-bootstrap";
import "../aboutUs.css";

const AboutUs = () => {
  return (
    <div className="backgroundGral mainSection">
      <Container className="d-flex mediumDevice">
        <img
          src="https://i.ibb.co/Tg1d724/primos.jpg"
          class="imagenPrimos mediumDevice mx-2"
        ></img>
        <section classname="mediumDevice">
          <p class="lh-lg textoCentrado ">
            Proyecto final Curso de FullStack, dictado por RollingCode.
            <p class="lh-lg textoJustificado">
              Bienvenidos a nuestro sitio, somos el grupo 2. Previo a contarles
              acerca de nosotros, queremos destacar que a lo largo de la
              creacion este proyecto pudimos ir concatenando los distintos
              modulos trabajados a lo largo del curso. Nuestro proyecto tiene la
              intencion de generar agrado a la vista, invitando al usuario en
              permanecer en el sitio, utilizando colores recomendados a tal fin.
            </p>
          </p>
          <p class="lh-lg textoJustificado">
            
            The KITCHEN es el restaurant que siempre soñaste, con nuestras
            modalidades de Delivery, Take Away! y nuestras sucursales a lo largo
            de la provincia, te invitan a redescubrir la gastronomia de la mano de los
            mejores Cheff e ingredientes del mundo.
          </p>
          <p class="lh-lg textoJustificado">
            Contamos con 5 sucursales a lo largo de la provincia para tu
            comodidad:
          </p>
          <ul class="lh-lg">
            <li>Av. Mate de Luna 1890</li>
            <li>Av. Siempre Viva 742</li>
            <li>General Paz 576</li>
            <li>Calle Oeste, Tafi Viejo</li>
            <li>Av. Peron 3200</li>
          </ul>
          <p class="lh-lg textoJustificado">
             The KITCHEN surgio con la iniciativa de 03 socios, Tomas Budeguer, Jose Luis Gomez Marigliano y Nicolas Gomez Marigliano (de derecha a izquierda), quienes tomaron como iniciativa, ofrecer la mejor calidad en conmida, en el menor tiempo posible.
            </p>
        </section>
      </Container>
    </div>
  );
};

export default AboutUs;
