import { Card } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  render() {
    return (
      <Card
        onClick={() => this.props.selectABook(this.props.book.asin)}
        style={{
          border: this.props.selectedBook === this.props.book.asin ? "3px solid red" : "none",
        }}
      >
        <a href="#link">
          <Card.Img variant="top" src={this.props.book.img} />
        </a>
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
