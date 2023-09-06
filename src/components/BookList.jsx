import { Container, Row, Col } from "react-bootstrap";

import SingleBook from "./SingleBook";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";

const BookList = (props) => {
  let type;

  if (props.genre === `fantasy`) {
    type = fantasy;
  }
  if (props.genre === `history`) {
    type = history;
  }
  if (props.genre === `horror`) {
    type = horror;
  } else if (props.genre === `romance`) {
    type = romance;
  } else if (props.genre === `scifi`) {
    type = scifi;
  }

  return (
    <Container>
      <h2>{props.title}</h2>
      <Row className="justify-content-center mt-4">
        {type.map((book) => {
          return (
            <Col xs={12} md={4} key={book.asin} className="mb-4">
              <SingleBook img={book.img} title={book.title} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BookList;
