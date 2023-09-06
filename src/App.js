import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/myNav";
import MyFooter from "./components/myFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <MyNav brand="BookBucks" />
      <Welcome title="BookBucks" description="The Worlds worst place to get your books!" />
      <BookList title="Fantasy" genre="fantasy" />
      <MyFooter />
    </>
  );
}

export default App;
