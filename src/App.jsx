import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Shop from "./components/Shop";
import Login from "./components/Login";
import Register from "./components/Register";
import Myaccount from "./components/Myaccount";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

function App() {
  return (
    <div style={{ backgroundColor: "#f8d4bd", minWidth: "390px", margin: "auto"}}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/myaccount" element={<Myaccount />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
