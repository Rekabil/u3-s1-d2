import { Container } from "react-bootstrap";
const Welcome = (props) => (
  <Container className="bg-light p-4 mt-4">
    <h1>{props.title}</h1>
    <hr />
    <p>{props.description}</p>
  </Container>
);
export default Welcome;
