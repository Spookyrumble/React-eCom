import "./App.css";
import Layout from "../Layout";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import Contact from "../Contact";
import Modal from "react-modal";
import DetailedProduct from "../DetailedProduct";
import ShoppingCart from "../ShoppingCart";

Modal.setAppElement("#root");

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="products/:id" element={<DetailedProduct />} />
        <Route path="shopping-cart" element={<ShoppingCart />} />
      </Route>
    </Routes>
  );
}

export default App;
