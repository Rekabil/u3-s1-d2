import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    data: [],
    isLoading: true,
    comment: "",
    rate: "",
    elementId: this.props.asin,
  };

  fetchComments = async () => {
    this.setState({ isLoading: true });

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.state.elementId, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjI4M2MwMzRmZjAwMTQwM2Y1NGQiLCJpYXQiOjE2OTQwODkxNDMsImV4cCI6MTY5NTI5ODc0M30.DQE47VWPk17UcYEQDS8Rv0Ol2-8hm8-3Mx9CAUAGh5g",
        },
      });
      if (response.ok) {
        console.log(response);
        const data = await response.json();
        this.setState({ data: data });
      }
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = () => {
    this.fetchComments();
  };

  render() {
    return this.state.data.map((data) => {
      return (
        <ListGroup.Item key={data._id}>
          {data.rate}/5 - {data.comment}
        </ListGroup.Item>
      );
    });
  }
}

export default CommentArea;
