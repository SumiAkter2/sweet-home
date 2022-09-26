import "./App.css";
import Banner from "./Pages/Banner/Banner";
import Footer from "./Pages/Footer/Footer";
import Navbar from "./Pages/Header/Navbar";
import Products from "./Pages/Products/Products";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
