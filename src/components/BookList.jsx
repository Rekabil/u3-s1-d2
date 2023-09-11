import { Container, Row, Col } from "react-bootstrap";
import { Component } from "react";

import SingleBook from "./SingleBook";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    genre: this.props.genre,
    selectedGenre: [],
    selectedBook: null,
  };

  getGenre = () => {
    let type = [];

    if (this.state.genre === `fantasy`) {
      type = fantasy;
    }
    if (this.state.genre === `history`) {
      type = history;
    }
    if (this.state.genre === `horror`) {
      type = horror;
    } else if (this.state.genre === `romance`) {
      type = romance;
    } else if (this.state.genre === `scifi`) {
      type = scifi;
    }
    this.setState({ selectedGenre: type });
  };
  selectABook = (asin) => {
    this.setState({ selectedBook: asin });
  };

  componentDidMount() {
    this.getGenre();
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2>{this.props.title}</h2>
            <Row className="justify-content-center mt-4">
              {this.state.selectedGenre.map((book) => {
                return (
                  <Col xs={12} md={4} key={book.asin} className="mb-4">
                    <SingleBook book={book} selectedBook={this.state.selectedBook} selectABook={this.selectABook} />
                  </Col>
                );
              })}
            </Row>
          </Col>
          <Col md={4}>
            <CommentArea asin={this.state.selectedBook} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
