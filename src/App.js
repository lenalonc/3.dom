import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./komponente/navbar";
import { Prodavnica } from "./stranice/prodavnica/prodavnica";
import { Korpa } from "./stranice/korpa/korpa";
import { ShopContextProvider } from "./context/shop-context";
import { Footer } from "./komponente/footer";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Prodavnica />} />
            <Route path="/cart" element={<Korpa />} />
          </Routes>
          <Footer />
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
