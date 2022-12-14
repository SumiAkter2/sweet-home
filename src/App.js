import "./App.css";
import Banner from "./Pages/Banner/Banner";
import Footer from "./Pages/Footer/Footer";
import Navbar from "./Pages/Header/Navbar";
import Products from "./Pages/Products/Products";
import SubscribePage from "./Pages/SubscribePage/SubscribePage";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <WelcomePage />
      <Products />
      <SubscribePage />
      <Footer />
    </div>
  );
}

export default App;
