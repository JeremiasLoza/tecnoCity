import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <header>
            <NavBar />
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/category/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/cart" element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
