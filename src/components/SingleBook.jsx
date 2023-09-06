import { Card } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }
  toggle() {
    this.setState({ selected: !this.state.selected });
  }

  render() {
    let selection = ["book-cover"];
    if (this.state.selected) {
      selection.push("selected");
    }

    return (
      <Card className={selection}>
        <a href="#link" onClick={this.toggle.bind(this)}>
          <Card.Img variant="top" src={this.props.img} />
        </a>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}
export default SingleBook;
