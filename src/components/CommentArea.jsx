import { Component } from "react";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
  };

  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      this.setState({ isLoading: true });

      try {
        const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGU4NjI4M2MwMzRmZjAwMTQwM2Y1NGQiLCJpYXQiOjE2OTQ0NDMzMDMsImV4cCI6MTY5NTY1MjkwM30.XZ5hS0rudBoiW0jWdQPFRtYz-_daWwF4dEwANvAToIw",
          },
        });
        if (response.ok) {
          console.log(response);
          const comments = await response.json();
          const filteredComments = comments.filter((comment) => comment.elementId === this.props.asin);
          this.setState({ comments: filteredComments });
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  };

  render() {
    console.log(this.state.comments);
    return (
      <>
        <h2>Comments</h2>
        {this.state.comments.map((book) => (
          <div key={book._id}>
            {book.rate} {book.comment}
          </div>
        ))}
      </>
    );
  }
}

export default CommentArea;
