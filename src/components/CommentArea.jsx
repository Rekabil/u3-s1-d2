import { Component } from "react";
import { ListGroup } from "react-bootstrap";

class CommentArea extends Component {
  state = {
    data: [],
    isLoading: true,
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.setState({ isLoading: true });

      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjI4M2MwMzRmZjAwMTQwM2Y1NGQiLCJpYXQiOjE2OTQ0NDMzMDMsImV4cCI6MTY5NTY1MjkwM30.XZ5hS0rudBoiW0jWdQPFRtYz-_daWwF4dEwANvAToIw",
          },
        });
        if (response.ok) {
          console.log(response);
          const comment = await response.json();
          this.setState({ data: comment });
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  render() {
    console.log(this.state.data);
    return (
      <div key={this.state.data._id}>
        {this.state.data.rate} {this.state.data.comment}
      </div>
    );
  }
}

export default CommentArea;
