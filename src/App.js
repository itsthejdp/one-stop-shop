//import Card from "./components/Card";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import CheckoutPage from "./pages/Checkout";
import LoginPage from "./pages/Login";
import SalePage from "./pages/Sale";
import FaqsPage from "./pages/Faqs";
import Layout from "./components/layout/Layout";
import Karte from "./components/Karte";

import Modal from "./components/Modal";
import Search from "./components/Search";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sale" element={<SalePage />} />
        <Route path="/faqs" element={<FaqsPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
