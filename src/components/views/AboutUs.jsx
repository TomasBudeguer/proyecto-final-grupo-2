import { Container, Row, Col, Card } from "react-bootstrap";

const AboutUs = () => {
  return (
    <Container className="mainSection">
      <h2 className="text-center">Acerca de nosotros</h2>
      <Card>
        <Card.Body>
          <Row>
            <Col sm={12} md={6} lg={8}>
              <Card.Text>Card text</Card.Text>
            </Col>

            <Col sm={12} md={6} lg={4}>
              <Card.Img src="holder.js/100px180" />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutUs;
