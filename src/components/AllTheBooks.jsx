import { Component } from "react";
import { Container, Row, Col, Cards } from "react-bootstrap";
import books from "../books/fantasy.json";

class AllTheBooks extends Component {
  state = {
    selectedBook: null,
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-4">
          <Col md={4}>
            <h2>Books Of The moment</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
