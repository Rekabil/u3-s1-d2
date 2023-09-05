import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/myNav";
import MyFooter from "./components/myFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <MyNav brand="BookBucks" />
      <Welcome title="BookBucks" description="The Worlds worst place to get your books!" />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
