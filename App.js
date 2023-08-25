import "./App.css";
import NavBar from "./Components/NavBar";
import Navbody from "./Components/Navbody";
import Body from "./Components/Body";
import Aboutus from "./Components/Aboutus";
import Product from "./Components/Product";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Navbody />
      <Body />
      <Aboutus />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
