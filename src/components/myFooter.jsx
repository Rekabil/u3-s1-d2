import { Container, Row, Col } from "react-bootstrap";

const MyFooter = (props) => (
  <Container fluid>
    <Row>
      <Col md={1}>Account</Col>
      <Col md={1}>News</Col>
      <Col md={4}></Col>
    </Row>
  </Container>
);

export default MyFooter;
