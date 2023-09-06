import { Container, Row, Col, Card } from "react-bootstrap";
import fantasy from "../books/fantasy.json";

const AllTheBooks = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-4">
        {fantasy.map((book) => {
          return (
            <Col xs={12} md={4} key={book.asin} className="mb-4">
              <Card className="book-cover">
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
